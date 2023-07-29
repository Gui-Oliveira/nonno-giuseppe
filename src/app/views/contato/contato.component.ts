import { ContatoService } from './contato.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
})
export class ContatoComponent {
  arquivosSelecionados!: FileList;
  arquivosSelecionadosArray: File[] = [];

  enviandoEmail = false;
  emailEnviado = false;

  public contatoForm: FormGroup = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', [Validators.required, Validators.minLength(10)]],
    assunto: ['', [Validators.required, Validators.minLength(2)]],
    mensagem: ['', [Validators.required, Validators.minLength(10)]],
    anexos: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private contatoService: ContatoService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.contatoForm;
  }

  enviarMensagem() {
    if (this.contatoForm.invalid) {
      return;
    }

    const dadosFormulario = this.contatoForm.value;
    this.enviandoEmail = true;

    this.contatoService
      .enviarEmail(dadosFormulario, this.arquivosSelecionados)
      .subscribe({
        next: () => {
          this.enviandoEmail = false;
          this.emailEnviado = true;
          this.contatoForm.reset();
          this.arquivosSelecionadosArray = [];
          this.contatoForm.get('anexos')?.setValue(''); 

          Object.keys(this.contatoForm.controls).forEach((key: string) => {
            this.contatoForm.get(key)?.clearValidators();
            this.contatoForm.get(key)?.updateValueAndValidity();
          });

          this.contatoForm.markAsPristine();
          this.contatoForm.markAsUntouched();

          const config: MatSnackBarConfig = {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          };
          this.snackBar.open('Mensagem enviada com sucesso!', 'Fechar', config);
        },
        error: (error) => {
          this.enviandoEmail = false;
          const config: MatSnackBarConfig = {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          };
          this.snackBar.open(
            'Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.',
            'Fechar',
            config
          );
        },
      });
  }

  public onFileSelected(event: any) {
    this.arquivosSelecionados = event.target.files;
    this.arquivosSelecionadosArray = Array.from(event.target.files);
  }

  public deleteFile(index: number) {
    if (this.arquivosSelecionados) {
      const updatedFiles: File[] = Array.from(this.arquivosSelecionados);
      updatedFiles.splice(index, 1);
      this.arquivosSelecionadosArray = updatedFiles;
      this.arquivosSelecionados = this.convertArrayToFileList(updatedFiles);
    }
  }

  private convertArrayToFileList(files: File[]): FileList {
    const dataTransfer = new DataTransfer();
    for (const file of files) {
      dataTransfer.items.add(file);
    }
    return dataTransfer.files;
  }

  public getIndexes() {
    return this.arquivosSelecionados
      ? Array.from({ length: this.arquivosSelecionados.length }, (_, i) => i)
      : [];
  }
}

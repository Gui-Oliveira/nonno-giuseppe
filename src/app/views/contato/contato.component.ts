import { ContatoService } from './contato.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
})
export class ContatoComponent {
  arquivosSelecionados!: FileList;
  arquivosSelecionadosArray: File[] = [];

  public contatoForm: FormGroup = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', [Validators.required, Validators.minLength(10)]],
    assunto: ['', [Validators.required, Validators.minLength(2)]],
    mensagem: ['', [Validators.required, Validators.minLength(10)]],
    anexos: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private contatoService: ContatoService
  ) {}

  ngOnInit() {
    this.contatoForm;
  }

  enviarMensagem() {
    if (this.contatoForm.invalid) {
      alert('Preencha todos os campos corretamente!');
    } else {
      console.log(this.contatoForm.value);
      alert('Mensagem enviada com sucesso!');
      this.contatoForm.reset();
    }

    if (this.contatoForm.invalid) {
      return;
    }

    const dadosFormulario = this.contatoForm.value;
    this.contatoService
      .enviarEmail(dadosFormulario, this.arquivosSelecionados)
      .subscribe(
        () => {
          this.contatoForm.reset();
          alert('Mensagem enviada com sucesso!');
        },
        (error) => {
          alert(
            'Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.'
          );
        }
      );
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

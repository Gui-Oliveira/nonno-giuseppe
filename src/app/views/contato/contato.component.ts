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
      return;
    }

    const dadosFormulario = this.contatoForm.value;
    this.contatoService
      .enviarEmail(dadosFormulario, this.arquivosSelecionados)
      .subscribe(
        () => {
          console.log(this.contatoForm.value);
          this.contatoForm.reset();
          alert('Mensagem enviada com sucesso!');
        },
        (error) => {
          console.error(this.contatoForm.value, error);
          alert(
            'Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.'
          );
        }
      );
  }

  public onFileSelected(event: any) {
    this.arquivosSelecionados = event.target.files;
  }

  // public deleteFile(file: File) {
  //   this.arquivosSelecionados = this.arquivosSelecionados.filter((f) => f.name !== file.name);
  // }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
})
export class ContatoComponent {
  selectedFile: File[] = [];

  public contatoForm: FormGroup = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', [Validators.required, Validators.minLength(10)]],
    assunto: ['', [Validators.required, Validators.minLength(2)]],
    mensagem: ['', [Validators.required, Validators.minLength(10)]],
    anexo: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) {}

  public enviarMensagem() {
    if (this.contatoForm.valid) {
      alert('Mensagem enviada com sucesso!');
      console.log(this.contatoForm.value);
    } else {
      console.log('Formulário inválido!');
    }

    this.contatoForm.reset();
  }

  public onFileSelected(event: any) {
    this.selectedFile = Array.from(event.target.files);
  }

  deleteFile(file: File) {
    this.selectedFile = this.selectedFile.filter((f) => f.name !== file.name);
  }
}

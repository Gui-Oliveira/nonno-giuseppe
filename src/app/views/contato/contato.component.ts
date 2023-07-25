import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
})
export class ContatoComponent {
  public contatoForm: FormGroup = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    estado: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
    cidade: ['', [Validators.required, Validators.minLength(2)]],
    mensagem: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  public enviarMensagem() {
    if (this.contatoForm.valid) {
      alert('Mensagem enviada com sucesso!');
      console.log(this.contatoForm.value);
    } else {
      console.log('Formulário inválido!');
    }
  }
}

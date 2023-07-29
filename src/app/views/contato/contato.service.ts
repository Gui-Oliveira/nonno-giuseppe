import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private backendUrl = 'https://email-nonno-giuseppe.onrender.com';

  constructor(private http: HttpClient) {}

  enviarEmail(dadosFormulario: any, anexos: FileList) {
    const formData = new FormData();
    formData.append('nome', dadosFormulario.nome);
    formData.append('email', dadosFormulario.email);
    formData.append('telefone', dadosFormulario.telefone);
    formData.append('assunto', dadosFormulario.assunto);
    formData.append('mensagem', dadosFormulario.mensagem);

    for (let i = 0; i < anexos.length; i++) {
      formData.append('anexos', anexos[i], anexos[i].name);
    }

    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');

    return this.http
      .post(`${this.backendUrl}/enviar-email`, formData, { headers })
      .pipe(
        map((response: any) => response),
        catchError((error) => {
          console.error(error);
          return throwError(
            'Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.'
          );
        })
      );
  }
}

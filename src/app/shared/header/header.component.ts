import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuHeader = [
    { link: '/', nome: 'Home' },
    { link: '/servicos', nome: 'Serviços' },
    { link: '/contato', nome: 'Contato' },
  ]

  botaoAtivo: string = '/'

  public marcarBotao(link: string) {
    this.botaoAtivo = link
  }

}

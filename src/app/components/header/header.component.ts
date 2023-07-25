import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  menuHeader = [
    { link: '/', nome: 'Home' },
    { link: '/servicos', nome: 'Serviços' },
    { link: '/pesquise', nome: 'Pesquise' },
    { link: '/contato', nome: 'Contato' },
  ];

  botaoAtivo: string = '/';

  public marcarBotao(link: string) {
    this.botaoAtivo = link;
  }
}

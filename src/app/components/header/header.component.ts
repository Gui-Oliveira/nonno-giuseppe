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
    { link: '/pesquisa', nome: 'Pesquisa' },
    { link: '/contato', nome: 'Contato' },
  ];

  botaoAtivo: string = '/';

  ngOnInit() {
    this.botaoAtivo = localStorage.getItem('botaoAtivo') || '/';
  }

  public marcarBotao(link: string) {
    this.botaoAtivo = link;
    localStorage.setItem('botaoAtivo', this.botaoAtivo);
  }
}

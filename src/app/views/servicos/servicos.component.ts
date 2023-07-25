import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss'],
})
export class ServicosComponent implements OnInit {
  public servicos: { titulo: string; subtitulo: string; texto: string }[] = [];
  public servicosRows: {
    titulo: string;
    subtitulo: string;
    texto: string;
  }[][] = [];

  ngOnInit() {
    this.servicos = [
      {
        titulo: 'What is Lorem Ipsum?',
        subtitulo: 'Where does it come from?',
        texto: `Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
      When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`,
      },
      {
        titulo: 'What is Lorem Ipsum?',
        subtitulo: 'Where does it come from?',
        texto: `Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
      When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`,
      },
      {
        titulo: 'What is Lorem Ipsum?',
        subtitulo: 'Where does it come from?',
        texto: `Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
      When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`,
      },
      {
        titulo: 'What is Lorem Ipsum?',
        subtitulo: 'Where does it come from?',
        texto: `Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
      When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`,
      },
      {
        titulo: 'What is Lorem Ipsum?',
        subtitulo: 'Where does it come from?',
        texto: `Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
      When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`,
      },
      {
        titulo: 'What is Lorem Ipsum?',
        subtitulo: 'Where does it come from?',
        texto: `Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
      When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`,
      },
    ];

    for (let i = 0; i < this.servicos.length; i += 3) {
      this.servicosRows.push(this.servicos.slice(i, i + 3));
    }
  }
}

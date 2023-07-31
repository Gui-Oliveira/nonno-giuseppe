import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss'],
})
export class ServicosComponent implements OnInit {
  public servicos: {
    titulo: string;
    subtitulo: string;
    texto: string;
    img: string;
  }[] = [];
  public servicosRows: {
    titulo: string;
    subtitulo: string;
    texto: string;
    img: string;
  }[][] = [];

  ngOnInit() {
    this.servicos = [
      {
        titulo: 'PESQUISAS',
        subtitulo: '',
        texto: `Oferecemos um serviço de pesquisa ideal para quem busca informações sobre antepassados, mesmo com dados não concretos, como a naturalidade na Itália. Nosso objetivo é encontrar o local exato de registro de nascimento para emissão do 'Estratto di Nascità'. Quanto mais informações oficiais em documentos, mais efetiva será a pesquisa. Aceitamos solicitações via e-mail PEC, se necessário.`,
        img: 'assets/imgs/certificato-nascita.jpg',
      },
      {
        titulo: 'ATUALIZAÇÃO DE DOCUMENTO (BUSCA)',
        subtitulo: '',
        texto: `Já tem uma cópia do documento de seu antepassado e precisa de uma atualização, podemos te ajudar.
        O serviço de busca é o serviço ideal para quem já tem uma cópia do livro de registro do “atto di nascità o matrimonio” de seu antepassado ou até mesmo uma via antiga do “estratto di nascità”.
        Efetuamos as ligações aos órgãos competentes para emissão do novo documento e acompanhamos a emissão para retirada do documento original.`,
        img: 'assets/imgs/estratto-senza-dati.webp',
      },
      {
        titulo: 'APOSTILAMENTO',
        subtitulo: '',
        texto: `Em sua pasta documental, existe alguma divergência de informações? Precisa corrigir algum documento no Brasil? Podemos te ajudar.
        Todo documento italiano para ser válido em território brasileiro, precisa de uma ‘certificação’, esta validação é chamada de Apostilamento. O apostilamento é a autenticação da assinatura do Oficial que assinou o documento e dando validade para uso no exterior.
        Esta autenticação é sempre feita na Prefeitura da Província.`,
        img: 'assets/imgs/apostille.webp',
      },
      {
        titulo: 'TRANSCRIÇÃO DE ATO',
        subtitulo: '',
        texto: `Já teve a cidadania italiana reconhecida via judicial? Nós podemos solicitar seus documentos transcritos.
        Após o reconhecimento de cidadania, por via judicial, será necessário entrar em contato com o comune, onde nasceu seu antenato, para solicitar a transcrição do seu ato.`,
        img: 'assets/imgs/trascrizione.webp',
      },
      {
        titulo: 'MONTAGEM DA PASTA COMPLETA',
        subtitulo: '',
        texto: `Caso precise de apoio profissional para deixar sua pasta documental pronta para entrar com o pedido de reconhecimento de cidadania, nós podemos fazer por você.
        Nós realizamos as pesquisas, emissões, apostilamentos e a tradução de todos os documentos brasileiros aqui na Itália com nossa tradutora parceira.
        Ao nos contatar, diga que tem interesse em montar sua pasta documental, que nós temos condições especiais.`,
        img: 'assets/imgs/pasta.webp',
      },
      {
        titulo: 'PESQUISA BR',
        subtitulo: '',
        texto: `Podemos auxiliar nossos clientes em pesquisas nos cartórios do Brasil.
        Por termos vasta experiência e por gostarmos de estar envolvido na história de nossos clientes, podemos auxiliar nas pesquisas Brasil.
        Temos Certificado Digital para solicitação de certidões em inteiro teor nos cartórios brasileiros.`,
        img: 'assets/imgs/br.webp',
      },
    ];

    for (let i = 0; i < this.servicos.length; i += 3) {
      this.servicosRows.push(this.servicos.slice(i, i + 3));
    }
  }
}

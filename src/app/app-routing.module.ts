import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './views/contato/contato.component';
import { HomeComponent } from './views/home/home.component';
import { PesquisaComponent } from './views/pesquisa/pesquisa.component';
import { ServicosComponent } from './views/servicos/servicos.component';
import { ObrigadoComponent } from './views/contato/obrigado/obrigado.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'servicos',
    component: ServicosComponent
  },
  {
    path: 'pesquise',
    component: PesquisaComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'obrigado',
    component: ObrigadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

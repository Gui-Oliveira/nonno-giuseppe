import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from '../app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContatoComponent } from './contato/contato.component';
import { ObrigadoComponent } from './contato/obrigado/obrigado.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ServicosComponent } from './servicos/servicos.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ServicosComponent,
    ContatoComponent,
    ObrigadoComponent,
    PesquisaComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule
  ]
})
export class ViewsModule { }

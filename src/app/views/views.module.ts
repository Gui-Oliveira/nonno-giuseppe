import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

import { ContatoComponent } from './contato/contato.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ContatoService } from './contato/contato.service';
import { ViewsRoutingModule } from './views-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ServicosComponent, ContatoComponent, PesquisaComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
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
    FlexLayoutModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [ContatoService],
})
export class ViewsModule {}

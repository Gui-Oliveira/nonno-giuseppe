import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from '../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BottomMenuComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  exports: [HeaderComponent, FooterComponent, BottomMenuComponent],
})
export class ComponentsModule {}

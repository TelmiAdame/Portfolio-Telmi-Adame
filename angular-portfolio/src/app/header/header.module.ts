import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header.component';
import { HamburguerComponent } from './hamburguer/hamburguer.component'



@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    HamburguerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }

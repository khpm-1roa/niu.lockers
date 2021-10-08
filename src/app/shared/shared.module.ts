import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }

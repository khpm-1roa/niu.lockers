import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DeveloperComponent } from './developer/developer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import {GuiaComponent} from './Guia/Guia.component'
import {ListaUserComponent} from './ListaUser/ListaUser.component'
import { LockersRoutesService } from 'src/app/shared/service/lockers-routes.service';


@NgModule({
  declarations: [
    DashboardComponent,
    HomePageComponent,
    DeveloperComponent,
    GuiaComponent,
    ListaUserComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers:[
    LockersRoutesService
  ]
})
export class DashboardModule { }

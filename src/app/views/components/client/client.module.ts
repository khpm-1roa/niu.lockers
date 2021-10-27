import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeClientComponent } from './home-client/home-client.component';
import { LockersRoutesService } from 'src/app/shared/service/lockers-routes.service';


@NgModule({
  declarations: [

    HomeClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ],
  providers:[
    LockersRoutesService
  ]
})
export class ClientModule { }

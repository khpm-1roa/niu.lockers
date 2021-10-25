import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { LockersRoutesService } from 'src/app/shared/service/lockers-routes.service';


@NgModule({
  declarations: [
    HomeAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers:[
    LockersRoutesService
  ]
})
export class AdminModule { }

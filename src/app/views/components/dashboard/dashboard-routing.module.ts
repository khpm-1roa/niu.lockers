import { GuiaComponent } from './Guia/Guia.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DeveloperComponent } from './developer/developer.component';
import { HomePageComponent } from './home-page/home-page.component';
import {ListaUserComponent} from './ListaUser/ListaUser.component'
const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
        path:'', component:HomePageComponent
      },
      {
        path:'developer', component: DeveloperComponent
      },
      {
        path: 'Guia', component: GuiaComponent
      },
      {
        path: 'ListaUser', component: ListaUserComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

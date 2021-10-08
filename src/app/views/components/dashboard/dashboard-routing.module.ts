import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DeveloperComponent } from './developer/developer.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
        path:'', component:HomePageComponent
      },
      {
        path:'developer', component: DeveloperComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

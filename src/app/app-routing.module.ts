import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./views/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },   
  { path: '**' , pathMatch:'full', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

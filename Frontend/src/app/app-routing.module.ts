import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '' , redirectTo:'/admin',pathMatch: 'full'},
  {path:'admin', component: AppComponent, children:[
    {path:'dashboard' ,component: DashboardComponent}  
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './authentication.guard';
import { CoursesComponent } from './admin/courses/courses.component';
import { ResolverServiceResolver } from './service/resolver-service.resolver';
import { EditFormComponent } from './admin/courses/edit-form/edit-form.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent,canActivate:[AuthenticationGuard]},
  {path:'admin', component: AdminComponent, children:[
    {path:'dashboard' ,component: DashboardComponent} ,
    {path:'courses' ,component: CoursesComponent,resolve:{
      data:ResolverServiceResolver
    }, children:[{path:'edit',component:EditFormComponent}]}  
    ],canActivate:[AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

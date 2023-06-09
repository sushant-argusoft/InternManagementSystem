import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './gaurd/authentication.guard';
import { CoursesComponent } from './admin/courses/courses.component';
import { ResolverServiceResolver } from './service/resolver-service.resolver';
import { EditFormComponent } from './admin/courses/edit-form/edit-form.component';
import { AccountComponent } from './admin/account/account.component';
import { EmployeeListComponent } from './admin/employee-list/employee-list.component';
import { AddEmployeeComponent } from './admin/employee-list/add-employee/add-employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'courses',
        component: CoursesComponent,
        resolve: {
          data: ResolverServiceResolver,
        },
        children: [{ path: 'edit', component: EditFormComponent }],
      },
      { path: 'account', component: AccountComponent },
      {
        path: 'employees',
        component: EmployeeListComponent,
        children: [],
      },
      { path: 'addEmployee', component: AddEmployeeComponent }
    ],
    canActivate: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

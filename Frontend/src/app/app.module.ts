import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidebarDirective } from './shared/sidebar.directive';

import { NavbarComponent } from './shared/navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './admin/dashboard/table/table.component';
import { TableModule } from 'primeng/table'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { RequestInterceptor } from './helper/request.interceptor';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { DropdownDirective } from './shared/dropdown.directive';
import { CoursesComponent } from './admin/courses/courses.component';
import { EditFormComponent } from './admin/courses/edit-form/edit-form.component';
import { HeaderComponent } from './admin/header/header.component';
import { InternListComponent } from './admin/courses/intern-list/intern-list.component';
import { FilterPipe } from './helper/filter.pipe';
import { AccountComponent } from './admin/account/account.component';
import { EmployeeListComponent } from './admin/employee-list/employee-list.component';
import { PaginatorComponent } from './shared/paginator/paginator.component';
import { AddEmployeeComponent } from './admin/employee-list/add-employee/add-employee.component';
import { ToastrModule } from 'ngx-toastr';







@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarDirective,
    HeaderComponent,
    NavbarComponent,
    TableComponent,
    LoginComponent,
    AdminComponent,
    DropdownDirective,
    CoursesComponent,
    EditFormComponent,
    InternListComponent,
    FilterPipe,
    AccountComponent,
    EmployeeListComponent,
    PaginatorComponent,
    AddEmployeeComponent
    
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressBarModule,
    ToastModule,
    ToastrModule.forRoot({
      positionClass:"toast-top-right",
      preventDuplicates:true,
      timeOut:2500,
    })
  ],
  
  providers: [{provide:HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

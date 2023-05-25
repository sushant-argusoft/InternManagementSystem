import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidebarDirective } from './shared/sidebar.directive';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './admin/dashboard/table/table.component';
import { TableModule } from 'primeng/table'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { RequestInterceptor } from './request.interceptor';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { DropdownDirective } from './shared/dropdown.directive';
import { CoursesComponent } from './admin/courses/courses.component';




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
    ToastModule
  ],
  
  providers: [{provide:HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

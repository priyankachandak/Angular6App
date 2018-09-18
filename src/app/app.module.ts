import { HttpModule } from '@angular/http';
import { StudentService } from './service/service';
import { routes } from './appRouter.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from 'src/app/Login/login.component';
import { RegistrationComponent } from 'src/app/registration/registration.component';
import { StudentListComponent } from 'src/app/studentList/studentlist.compoent';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    [ RouterModule.forRoot(routes) ],
     HttpModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

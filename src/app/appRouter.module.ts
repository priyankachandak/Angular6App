import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './Login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from 'src/app/studentList/studentlist.compoent';



export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegistrationComponent},
  {path: 'studlist', component: StudentListComponent}

];


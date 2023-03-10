import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class AuthModule { }

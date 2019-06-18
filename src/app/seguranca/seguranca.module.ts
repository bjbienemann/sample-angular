import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { PasswordModule } from 'primeng/components/password/password';
import { LoginComponent } from './login/login.component';
import { SegurancaRoutingModule } from './seguranca-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,

    ButtonModule,
    InputTextModule,
    PasswordModule,

    SegurancaRoutingModule
  ]
})
export class SegurancaModule { }

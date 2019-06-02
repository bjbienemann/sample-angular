import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ErrorHandlerService } from './error-handler.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';

@NgModule({
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent],
  exports: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    ErrorHandlerService
  ]
})
export class CoreModule { }

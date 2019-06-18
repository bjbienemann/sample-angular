import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LancamentoModule } from './lancamento/lancamento.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { CoreModule } from './core/core.module';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { registerLocaleData } from '@angular/common';
import { MessageService } from 'primeng/components/common/api';
import { ToastModule } from 'primeng/components/toast/toast';
import br from '@angular/common/locales/br';
import { SegurancaModule } from './seguranca/seguranca.module';

registerLocaleData(br, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    
    ConfirmDialogModule,
    ToastModule,
    
    CoreModule,
    LancamentoModule,
    PessoaModule,
    SegurancaModule,
    AppRoutingModule
  ],
  providers: [
    ConfirmationService,
    MessageService,
    Title,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

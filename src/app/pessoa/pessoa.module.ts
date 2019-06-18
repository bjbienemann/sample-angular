import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { ButtonModule } from 'primeng/components/button/button';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { PessoaRoutingModule } from './pessoa-routing.module';

@NgModule({
  declarations: [
    PessoaCadastroComponent,
    PessoaPesquisaComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    FormsModule,

    PessoaRoutingModule,

    ButtonModule,
    CalendarModule,
    DropdownModule,
    InputMaskModule,
    InputTextModule,
    InputTextareaModule,
    SelectButtonModule,
    TableModule,
    TooltipModule
  ],
  providers: []
})
export class PessoaModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PessoaPesquisaComponent } from '../pessoa/pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaCadastroComponent } from '../pessoa/pessoa-cadastro/pessoa-cadastro.component';

const routes: Routes = [
  { path: 'pessoas', component: PessoaPesquisaComponent },
  { path: 'pessoas/novo', component: PessoaCadastroComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }

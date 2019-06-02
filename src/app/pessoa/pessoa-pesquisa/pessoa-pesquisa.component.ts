import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { LazyLoadEvent, MessageService } from 'primeng/components/common/api';
import { Pessoa } from '../pessoa';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent implements OnInit {

  nome: string;
  pessoas = [];

  totalRegistros = 0;

  constructor(
    private pessoaService: PessoaService,
    private messageService: MessageService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit() {
  }

  carregar(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  pesquisar(pagina = 0) {
    this.pessoaService.get({ nome: this.nome, pagina, itensPorPagina: 5 })
      .subscribe(
        page => {
          this.pessoas = page.content;
          this.totalRegistros = page.totalElements;
        },
        erro => console.log(erro)
      );
  }

  mudarStatus(pessoa: Pessoa) {
    const novoStatus = !pessoa.ativo;
    this.pessoaService.putAtivo(pessoa.id, novoStatus)
      .subscribe(
        data => {
          pessoa.ativo = novoStatus
          const detail = novoStatus ? 'Ativado' : 'Desativado';
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail});
        },
        erro => {
          this.errorHandlerService.handle(erro);
        }
      )
  }

}

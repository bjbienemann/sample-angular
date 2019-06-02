import { Component, OnInit, ViewChild } from '@angular/core';
import { LancamentoService } from '../lancamento.service';
import { MessageService, ConfirmationService } from 'primeng/components/common/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent implements OnInit {

  descricao: string;
  dataInicio: Date;
  dataFim: Date;
  lancamentos = [];

  totalRegistros = 0;

  @ViewChild('tableLancamento') tabelaLancamento;

  constructor(
    private lancamentoService: LancamentoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService, 
    private errorHandlerService: ErrorHandlerService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.lancamentoService.get({ descricao: this.descricao, dataInicio: this.dataInicio, dataFim: this.dataFim })
      .subscribe(
        data => {
          this.lancamentos = data.content;
          this.totalRegistros = data.totalElements;
        },
        erro => this.errorHandlerService.handle(erro)
      );
  }

  deletar(lancamento: any) {
    this.confirmationService.confirm({
      message: 'Deseja deletar o registro?',
      accept: () => {
        this.lancamentoService.delete(lancamento.id)
          .subscribe(
            data => {
              this.pesquisar();
              // this.tabelaLancamento.first = 0;
              this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Deletado com sucesso' });
            },
            erro => {
              this.errorHandlerService.handle(erro);
            }
          );
      }
    });

  }
}

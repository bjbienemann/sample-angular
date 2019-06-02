import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LancamentoService } from '../lancamento.service';
import { Lancamento } from '../lancamento';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { PessoaService } from 'src/app/pessoa/pessoa.service';
import { Pessoa } from 'src/app/pessoa/pessoa';
import { FormControl } from '@angular/forms';
import { Categoria } from 'src/app/categoria/categoria';
import { MessageService } from 'primeng/components/common/api';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  lancamento = new Lancamento();

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ];

  categorias: Categoria[];

  pessoa: Pessoa;
  pessoas = [];

  constructor(
    private lancamentoService: LancamentoService,
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private messageService: MessageService,
    private errorHandlerService: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.carregar(id);
    }

    this.carregarCategorias();
  }

  carregar(id: number) {
    this.lancamentoService.getById(id)
      .subscribe(
        data => {
          const json = JSON.stringify(data);
          this.lancamento = JSON.parse(json, this.reviver);
        },
        erro => this.errorHandlerService.handle(erro)
      );
  }

  carregarCategorias() {
    return this.categoriaService.get()
      .subscribe(
        data => {
          // this.categorias = data.map(c => ({ label: c.nome, value: c.id }));
          this.categorias = data;
        },
        erro => {
          this.errorHandlerService.handle(erro);
        }
      )
  }

  carregarPessoas(event) {
    const nome = event.query;
    this.pessoaService.get({ nome, pagina: 0, itensPorPagina: 10 })
      .subscribe(
        data => {
          this.pessoas = data.content;
        },
        erro => {
          this.errorHandlerService.handle(erro);
        }
      )
  }

  novo(form: FormControl) {
    form.reset();
    
    setTimeout(() => {
      this.lancamento = new Lancamento();
    }, 1);
    
    this.router.navigate(['/lancamentos/novo']);
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizar(form);
    } else {
      this.adicionar(form);
    }
  }

  adicionar(form: FormControl) {
    this.lancamentoService.post(this.lancamento)
      .subscribe(
        data => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Adicionado com sucesso' });

          // this.novo(form);
          this.router.navigate(['/lancamentos', data.id]);
        },
        erro => {
          this.errorHandlerService.handle(erro)
        }
      )
  }

  atualizar(form: FormControl) {
    this.lancamentoService.put(this.lancamento)
      .subscribe(
        data => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Atualizado com sucesso' });
        },
        erro => {
          this.errorHandlerService.handle(erro)
        }
      )
  }

  get editando() {
    return Boolean(this.lancamento.id);
  }

  reviver(key, value) {
    const dateFormat = /^\d{4}-\d{2}-\d{2}/;
    const dateTimeFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;
    if (typeof value === 'string') {
      if (dateFormat.test(value)) {
        return new Date(`${value}T00:00:00`);
      } else if (dateTimeFormat.test(value)) {
        return new Date(value);
      }
    }
    return value;
  }
}

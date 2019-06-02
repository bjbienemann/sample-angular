import { Categoria } from '../categoria/categoria';
import { Pessoa } from '../pessoa/pessoa';

// export enum TipoLancamento { RECEITA, DESPESA }

export class LancamentoResumo {
    id: number;
    descricao: string;
    dataVencimento: Date;
    dataPagamento: Date;
    valor: number;
    tipo: string;
    categoria: string;
    pessoa: string;
}
export class Lancamento {
    id: number;
    descricao: string;
    dataVencimento: Date;
    dataPagamento: Date;
    valor: number;
    tipo = 'RECEITA';
    observacao: string;
    categoria: Categoria;
    pessoa: Pessoa;
}
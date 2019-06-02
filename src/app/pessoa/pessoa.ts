import { Endereco } from './endereco';

export interface Pessoa {
    id: number;
    nome: string;
    ativo: boolean;
    endereco: Endereco;
}

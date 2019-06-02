import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa';
import { Page } from '../core/page';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'Basic YWRtaW46YWRtaW4='
});

export interface PessoaFilter {
  nome: string;
  pagina: number;
  itensPorPagina: number;
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  
  uri: string;

  constructor(public http: HttpClient) {
    this.uri = `${environment.apiUrl}/pessoas`;
   }

  get(filter: PessoaFilter): Observable<Page<Pessoa>> {
    let params = new HttpParams();
    params = filter.nome ? params.set('nome', filter.nome) : params;
    params = filter.pagina ? params.set('page', filter.pagina.toString()) : params;
    params = filter.itensPorPagina ? params.set('size', filter.itensPorPagina.toString()) : params;

    return this.http.get<Page<Pessoa>>(`${this.uri}`, { headers, params });
  }

  getById(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.uri}/${id}`, { headers });
  }

  getByNome(nome: string): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.uri}/`, { headers });
  }

  putAtivo(id: number, ativo: boolean): Observable<void> {
    return this.http.put<void>(`${this.uri}/${id}/ativo`, ativo, { headers });
  }
}

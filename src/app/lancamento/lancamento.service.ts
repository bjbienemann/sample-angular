import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Lancamento, LancamentoResumo } from './lancamento';
import { Page } from '../core/page';
import { formatDate } from '@angular/common';
import { environment } from 'src/environments/environment';

export interface LancamentoFilter {
  descricao: string;
  dataInicio: Date;
  dataFim: Date;
}

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'Basic YWRtaW46YWRtaW4='
});

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  uri: string;

  constructor(private http: HttpClient) {
    this.uri = `${environment.apiUrl}/lancamentos`;
  }

  get(filter: LancamentoFilter): Observable<Page<LancamentoResumo>> {
    let params = new HttpParams();
    params = filter.descricao ? params.set('descricao', filter.descricao) : params;
    params = filter.dataInicio ? params.set('dataVencimentoInicio', formatDate(filter.dataInicio, 'yyyy-MM-dd', 'en-US')) : params;
    params = filter.dataFim ? params.set('dataVencimentoFim', formatDate(filter.dataFim, 'yyyy-MM-dd', 'en-US')) : params;
    return this.http.get<Page<LancamentoResumo>>(`${this.uri}?resumo`, { headers, params });
  }

  getById(id: number): Observable<Lancamento> {
    return this.http.get<Lancamento>(`${this.uri}/${id}`, { headers });
  }

  post(lancamento: Lancamento): Observable<Lancamento> {
    return this.http.post<Lancamento>(`${this.uri}`, lancamento, { headers });
  }

  put(lancamento: Lancamento): Observable<Lancamento> {
    return this.http.put<Lancamento>(`${this.uri}`, lancamento, { headers });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.uri}/${id}`, { headers });
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'Basic YWRtaW46YWRtaW4='
});

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  uri: string;

  constructor(private http: HttpClient) {
    this.uri = `${environment.apiUrl}/categorias`;
  }

  get(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.uri}`, { headers });
  }
}

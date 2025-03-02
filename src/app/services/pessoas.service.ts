import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPessoa } from '../interfaces/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  private apiUrl = 'http://localhost:8080/api/pessoas';

  constructor(private http: HttpClient) {}

  buscarTodasPessoas(): Observable<IPessoa[]> {
    return this.http.get<IPessoa[]>(this.apiUrl);
  }

  buscarPessoaPorId(id: string): Observable<IPessoa> {
    return this.http.get<IPessoa>(`${this.apiUrl}/${id}`);
  }

  adicionarPessoa(pessoa: IPessoa): Observable<IPessoa> {
    return this.http.post<IPessoa>(this.apiUrl, pessoa);
  }

  atualizarPessoa(id: string, pessoa: IPessoa): Observable<IPessoa> {
    return this.http.put<IPessoa>(`${this.apiUrl}/${id}`, pessoa);
  }

  excluirPessoa(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos } from '../../core/models/produtos/produtos.model';

@Injectable({ providedIn: 'root' })
export class ProdutosService {
  private readonly API = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) {}

listar(): Observable<Produtos[]> {
  return this.http.get<Produtos[]>(this.API);
}

obterPorId(id: string): Observable<Produtos> {
  return this.http.get<Produtos>(`${this.API}/${id}`);
}

criar(produto: Produtos): Observable<Produtos> {
  return this.http.post<Produtos>(this.API, produto);
}

atualizar(id: string, produto: Produtos): Observable<Produtos> {
  return this.http.put<Produtos>(`${this.API}/${id}`, produto);
}

  excluir(id: string): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }
}
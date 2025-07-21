import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedidos } from '../../core/models/pedidos/pedidos.model';

@Injectable({ providedIn: 'root' })
export class PedidosService {
  private readonly API = 'http://localhost:3000/pedidos';

  constructor(private http: HttpClient) {}

listar(): Observable<Pedidos[]> {
  return this.http.get<Pedidos[]>(this.API);
}

obterPorId(id: string): Observable<Pedidos> {
  return this.http.get<Pedidos>(`${this.API}/${id}`);
}

criar(pedido: Pedidos): Observable<Pedidos> {
  return this.http.post<Pedidos>(this.API, pedido);
}

atualizar(id: string, pedido: Pedidos): Observable<Pedidos> {
  return this.http.put<Pedidos>(`${this.API}/${id}`, pedido);
}

  excluir(id: string): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }
}
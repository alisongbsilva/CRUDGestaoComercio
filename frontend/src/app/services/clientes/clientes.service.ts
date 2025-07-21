import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientes } from '../../core/models/clientes/clientes.model';

@Injectable({ providedIn: 'root' })
export class ClientesService {
  private readonly API = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) {}

listar(): Observable<Clientes[]> {
  return this.http.get<Clientes[]>(this.API);
}

obterPorId(id: string): Observable<Clientes> {
  return this.http.get<Clientes>(`${this.API}/${id}`);
}

criar(cliente: Clientes): Observable<Clientes> {
  return this.http.post<Clientes>(this.API, cliente);
}

atualizar(id: string, cliente: Clientes): Observable<Clientes> {
  return this.http.put<Clientes>(`${this.API}/${id}`, cliente);
}

  excluir(id: string): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }
}
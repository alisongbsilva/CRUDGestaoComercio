import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresas } from '../../core/models/empresas/empresas.model';

@Injectable({ providedIn: 'root' })
export class EmpresasService {
  private readonly API = 'http://localhost:3000/empresas';

  constructor(private http: HttpClient) {}

listar(): Observable<Empresas[]> {
  return this.http.get<Empresas[]>(this.API);
}

obterPorId(id: string): Observable<Empresas> {
  return this.http.get<Empresas>(`${this.API}/${id}`);
}

criar(empresa: Empresas): Observable<Empresas> {
  return this.http.post<Empresas>(this.API, empresa);
}

atualizar(id: string, empresa: Empresas): Observable<Empresas> {
  return this.http.put<Empresas>(`${this.API}/${id}`, empresa);
}

  excluir(id: string): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }
}
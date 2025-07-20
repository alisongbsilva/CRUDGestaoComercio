import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';

@Injectable( { providedIn: 'root' })
export class AuthService {
  private readonly API_URL = 'http://localhost:3000';
  private readonly TOKEN_KEY = 'token';

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, { email, senha }).pipe(
      tap((res: any) => {
      if (res && res.token) {
        this.saveToken(res.token);
        localStorage.setItem('usuario', JSON.stringify(res.usuario));
      }
      }),
      catchError(this.handleError)
    );
  }
  

  cadastrarUsuario(dados: { nome: string; email: string; senha: string }): Observable<any> {
    return this.http.post(`${this.API_URL}/usuarios`, dados);
  }

  saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  private handleError(error: any): Observable<never> {
    // You can customize this error handling as needed
    console.error('Ocorreu um erro', error);
    throw error;
  }
}

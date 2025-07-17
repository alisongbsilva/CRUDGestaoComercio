import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable( { providedIn: 'root' })
export class AuthService {
  private readonly API_URL = 'http://localhost:3000';
  private readonly TOKEN_KEY = 'VENDERGAS';

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, {email, senha}).pipe(
      tap((res: any) => this.saveToken(res.Token))
    );
  }

  register(dados: any): Observable<any> {
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

}

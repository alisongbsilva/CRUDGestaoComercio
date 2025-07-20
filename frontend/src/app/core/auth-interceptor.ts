import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NotificationService } from './notification';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
    private notify: NotificationService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    const clonedReq = token ? req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    }) : req;

    return next.handle(clonedReq).pipe(
      catchError(err => {
        if (err.status === 401 || err.status === 403 || err.status === 500) {
          switch (err.status) {
            case 401:
              this.authService.logout();
              this.router.navigate(['/login']);
              this.notify.show('Sessão expirada. Por favor, faça login novamente.');
              break;
            case 403:
              this.notify.show('Acesso negado. Você não tem permissão para acessar este recurso.');
              break;
            case 500:
              this.notify.show('Erro interno do servidor. Por favor, tente novamente mais tarde.');
              break;
          }
        }
        return throwError(() => err);
      })
    );
  }
}

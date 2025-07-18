import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NotificationService } from './notification';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.getToken();
  
  const notify = inject(NotificationService);

  const clonedReq = token ? req.clone({
    setHeaders: { Authorization: `Bearer ${token}`}
  }) : req;

  return next(clonedReq).pipe(
    catchError(err => {
      if (err.status === 401 || err.status === 403 || err.status === 500) {
        switch (err.status) {
          case 401:
            authService.logout();
            router.navigate(['/login']);
            notify.show('Sessão expirada. Por favor, faça login novamente.');
            break;
          case 403:
            notify.show('Acesso negado. Você não tem permissão para acessar este recurso.');
            break;
          case 500:
            notify.show('Erro interno do servidor. Por favor, tente novamente mais tarde.');
            break;
        }
      }
      
      return throwError(() => err);
    })
  )
};

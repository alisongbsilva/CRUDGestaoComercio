import { CanActivateChildFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../core/auth.service';

export const authGuard: CanActivateChildFn = (route, state) => {
  const auth = inject(AuthService);
  const router =inject(Router);

  //auth.logout();

  console.log('[GUARD] isLoggedIn:', auth.isLoggedIn());

  if (auth.isLoggedIn()) {
    return true;
  } else {
    console.warn('[GUARD] Redirecionando para /login');
    router.navigate(['/login']);
    return false;
  }
  
};

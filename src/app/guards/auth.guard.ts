import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject (AuthService)
  const routerServ = inject(Router)
  if (authService.firebaseUser.value){

    return true;
  } else {
    routerServ.navigateByUrl('/login')
    return false;

  }
};

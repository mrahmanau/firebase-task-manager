// src/app/auth/auth.guard.ts

import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { Auth, user } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  return user(auth).pipe(
    map((currentUser) => {
      if (currentUser) {
        return true;
      } else {
        router.navigate(['/auth/login']);
        return false;
      }
    })
  );
};

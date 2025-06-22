import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private router: Router) {}

  register(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        console.log('✅ Registration successful:', userCredential.user);
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.error('❌ Registration failed:', error);
      });
  }

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        console.log('✅ Login successful:', userCredential.user);
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.error('❌ Login failed:', error);
        alert(error.message);
      });
  }
}

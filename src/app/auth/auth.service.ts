import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth, private router: Router) {}

  register(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        console.log('✅ Registration successful:', userCredential.user);
        this.router.navigate(['/']); // redirect to home or dashboard
      })
      .catch((error) => {
        console.error('❌ Registration failed:', error);
        alert(error.message); // optional: show error to user
      });
  }
}
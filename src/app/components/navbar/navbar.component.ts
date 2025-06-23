import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth, signOut, user } from '@angular/fire/auth';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  currentUser$: Observable<any>;
  menuOpen = false;

  constructor(private auth: Auth) {
    this.currentUser$ = user(this.auth);
  }

  logout() {
    signOut(this.auth);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}

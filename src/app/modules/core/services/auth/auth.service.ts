import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private loggedIn: boolean;

  constructor(private route: Router) {}

  login(): void {
    this.loggedIn = true;
    this.route.navigate(['/']);
  }

  logout(): void {
    this.loggedIn = false;
    this.route.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}

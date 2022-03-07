import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-auth-layout-page',
  templateUrl: './auth-layout-page.component.html'
})
export class AuthLayoutPageComponent {
  constructor(private router: Router) {}

  onNavigateToHome(): void {
    this.router.navigate(['/']);
  }
}

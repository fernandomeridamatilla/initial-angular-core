import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  constructor(private router: Router) {}

  onNavigateToUsers(): void {
    this.router.navigate(['/users']);
  }

  onNavigateToPosts(): void {
    this.router.navigate(['/posts']);
  }

  onNavigateToForm(): void {
    this.router.navigate(['/form']);
  }
}

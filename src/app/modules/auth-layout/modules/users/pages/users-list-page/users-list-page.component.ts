import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UsersService } from '../../services/users-service/users.service';

@Component({
  selector: 'ngx-users-list-page',
  templateUrl: './users-list-page.component.html'
})
export class UsersListPageComponent implements OnInit {
  users: unknown;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.getUsersList();
  }

  onNavigateToDetail(): void {
    this.router.navigate(['/users', 1], {
      relativeTo: this.route
    });
  }

  private getUsersList(): void {
    this.usersService
      .getAll()
      .subscribe((users: unknown) => (this.users = users));
  }
}

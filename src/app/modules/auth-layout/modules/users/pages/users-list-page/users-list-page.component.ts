/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
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

  onClickUser(user: any): void {
    this.router.navigate(['/users', user.id], {
      relativeTo: this.route
    });
  }

  private getUsersList(): void {
    this.usersService
      .getAll()
      .subscribe((users: unknown) => (this.users = users));
  }
}

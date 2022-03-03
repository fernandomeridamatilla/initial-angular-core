import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UsersService } from '../../services/users-service/users.service';

@Component({
  selector: 'ngx-users-detail-page',
  templateUrl: './users-detail-page.component.html'
})
export class UsersDetailPageComponent implements OnInit {
  user: unknown;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDetail();
  }

  onNavigateToList(): void {
    this.router.navigate(['/users']);
  }

  private getDetail(): void {
    const { id } = this.route.snapshot.params;

    this.usersService
      .getDetail(String(id))
      .subscribe((user: unknown) => (this.user = user));
  }
}

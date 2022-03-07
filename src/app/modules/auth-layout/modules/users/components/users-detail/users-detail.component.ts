import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-users-detail',
  templateUrl: './users-detail.component.html'
})
export class UsersDetailComponent {
  @Input() user: any;
}

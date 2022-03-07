import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-users-table',
  templateUrl: './users-table.component.html'
})
export class UsersTableComponent {
  @Input() users: any;
  @Output() clickUser = new EventEmitter<unknown>();

  displayedColumns: string[] = ['id', 'name', 'username', 'email'];

  onClickUser(user: unknown): void {
    this.clickUser.emit(user);
  }
}

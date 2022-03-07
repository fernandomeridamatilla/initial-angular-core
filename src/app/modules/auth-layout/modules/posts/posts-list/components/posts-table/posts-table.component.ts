/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-posts-table',
  templateUrl: './posts-table.component.html'
})
export class PostsTableComponent {
  @Input() posts: any;
  @Output() clickPost = new EventEmitter<unknown>();

  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];

  onClickPost(post: unknown): void {
    this.clickPost.emit(post);
  }
}

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
  mouseEnterPost: any;

  onClickPost(post: unknown): void {
    this.clickPost.emit(post);
  }

  onMouseEnter(postId: number): void {
    this.mouseEnterPost = this.posts.find((post: any) => post.id === postId);
  }

  onMouseLeave(): void {
    this.mouseEnterPost = null;
  }
}

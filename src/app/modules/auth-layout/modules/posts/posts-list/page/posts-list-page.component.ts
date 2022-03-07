/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PostsListService } from '../services/posts-list-service/posts-list.service';

@Component({
  selector: 'ngx-posts-list-page',
  templateUrl: './posts-list-page.component.html'
})
export class PostsListPageComponent implements OnInit {
  posts: unknown;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsListService: PostsListService
  ) {}

  ngOnInit(): void {
    this.getPostsList();
  }

  onClickPost(post: any): void {
    this.router.navigate(['/posts', post.id], {
      relativeTo: this.route
    });
  }

  private getPostsList(): void {
    this.postsListService
      .getAll()
      .subscribe((posts: unknown) => (this.posts = posts));
  }
}

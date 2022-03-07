import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PostsService } from '../../services/posts-service/posts.service';

@Component({
  selector: 'ngx-posts-detail-page',
  templateUrl: './posts-detail-page.component.html'
})
export class PostsDetailPageComponent implements OnInit {
  post: unknown;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDetail();
  }

  onNavigateToList(): void {
    this.router.navigate(['/posts']);
  }

  private getDetail(): void {
    const { id } = this.route?.snapshot?.params;

    this.postsService
      .getDetail(String(id))
      .subscribe((post: unknown) => (this.post = post));
  }
}

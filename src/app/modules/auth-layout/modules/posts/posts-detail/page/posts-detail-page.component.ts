import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PostsDetailService } from '../services/posts-detail-service/posts-detail.service';

@Component({
  selector: 'ngx-posts-detail-page',
  templateUrl: './posts-detail-page.component.html'
})
export class PostsDetailPageComponent implements OnInit {
  post: unknown;

  constructor(
    private postsDetailService: PostsDetailService,
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

    this.postsDetailService
      .getDetail(String(id))
      .subscribe((post: unknown) => (this.post = post));
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-posts-detail',
  templateUrl: './posts-detail.component.html'
})
export class PostsDetailComponent {
  @Input() post: any;
}

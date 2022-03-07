import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { PostsDetailComponent } from './components/posts-detail/posts-detail.component';
import { PostsDetailPageComponent } from './page/posts-detail-page.component';
import { PostsDetailRoutingModule } from './posts-detail-routing.module';
import { PostsDetailService } from './services/posts-detail-service/posts-detail.service';

@NgModule({
  declarations: [PostsDetailComponent, PostsDetailPageComponent],
  providers: [PostsDetailService],
  imports: [SharedModule, PostsDetailRoutingModule]
})
export class PostsDetailModule {}

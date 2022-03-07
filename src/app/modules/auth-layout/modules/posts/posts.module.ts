import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { PostsDetailPageComponent } from './pages/posts-detail-page/posts-detail-page.component';
import { PostsListPageComponent } from './pages/posts-list-page/posts-list-page.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsService } from './services/posts-service/posts.service';

@NgModule({
  declarations: [PostsListPageComponent, PostsDetailPageComponent],
  providers: [PostsService],
  imports: [SharedModule, PostsRoutingModule]
})
export class PostsModule {}

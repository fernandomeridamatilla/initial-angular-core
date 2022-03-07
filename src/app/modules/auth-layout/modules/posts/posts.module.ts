import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { PostsDetailComponent } from './components/posts-detail/posts-detail.component';
import { PostsTableComponent } from './components/posts-table/posts-table.component';
import { PostsDetailPageComponent } from './pages/posts-detail-page/posts-detail-page.component';
import { PostsListPageComponent } from './pages/posts-list-page/posts-list-page.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsService } from './services/posts-service/posts.service';

@NgModule({
  declarations: [
    PostsListPageComponent,
    PostsDetailPageComponent,
    PostsDetailComponent,
    PostsTableComponent
  ],
  providers: [PostsService],
  imports: [SharedModule, PostsRoutingModule]
})
export class PostsModule {}

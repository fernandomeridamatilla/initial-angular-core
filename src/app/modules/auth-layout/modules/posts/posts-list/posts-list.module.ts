import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { PostsTableComponent } from './components/posts-table/posts-table.component';
import { PostsListPageComponent } from './page/posts-list-page.component';
import { PostsListRoutingModule } from './posts-list-routing.module';
import { PostsListService } from './services/posts-list-service/posts-list.service';

@NgModule({
  declarations: [PostsTableComponent, PostsListPageComponent],
  providers: [PostsListService],
  imports: [SharedModule, PostsListRoutingModule]
})
export class PostsListModule {}

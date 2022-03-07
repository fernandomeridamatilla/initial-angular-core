import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsListPageComponent } from './page/posts-list-page.component';

export const routes: Routes = [
  {
    path: '',
    component: PostsListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsListRoutingModule {}

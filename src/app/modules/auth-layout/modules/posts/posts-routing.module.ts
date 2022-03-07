import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsDetailPageComponent } from './pages/posts-detail-page/posts-detail-page.component';
import { PostsListPageComponent } from './pages/posts-list-page/posts-list-page.component';

export const routes: Routes = [
  {
    path: '',
    component: PostsListPageComponent
  },
  {
    path: ':id',
    component: PostsDetailPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsDetailPageComponent } from './page/posts-detail-page.component';

export const routes: Routes = [
  {
    path: '',
    component: PostsDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsDetailRoutingModule {}

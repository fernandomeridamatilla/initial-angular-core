import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsDetailModule } from './posts-detail/posts-detail.module';
import { PostsListModule } from './posts-list/posts-list.module';

export const routes: Routes = [
  {
    path: '',
    loadChildren: async (): Promise<typeof PostsListModule> =>
      (await import('./posts-list/posts-list.module')).PostsListModule
  },
  {
    path: ':id',
    loadChildren: async (): Promise<typeof PostsDetailModule> =>
      (await import('./posts-detail/posts-detail.module')).PostsDetailModule
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

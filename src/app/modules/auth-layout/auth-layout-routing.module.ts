/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormModule } from './modules/form/form.module';
import { HomeModule } from './modules/home/home.module';
import { PostsModule } from './modules/posts/posts.module';
import { UsersModule } from './modules/users/users.module';
import { AuthLayoutPageComponent } from './page/auth-layout-page/auth-layout-page.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutPageComponent,
    children: [
      {
        path: 'home',
        loadChildren: async (): Promise<typeof HomeModule> =>
          (await import('./modules/home/home.module')).HomeModule
      },
      {
        path: 'users',
        loadChildren: async (): Promise<typeof UsersModule> =>
          (await import('./modules/users/users.module')).UsersModule
      },
      {
        path: 'posts',
        loadChildren: async (): Promise<typeof PostsModule> =>
          (await import('./modules/posts/posts.module')).PostsModule
      },
      {
        path: 'form',
        loadChildren: async (): Promise<typeof FormModule> =>
          (await import('./modules/form/form.module')).FormModule
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthLayoutRoutingModule {}

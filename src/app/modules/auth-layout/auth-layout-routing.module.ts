/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './modules/home/home.module';
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersDetailPageComponent } from './pages/users-detail-page/users-detail-page.component';
import { UsersListPageComponent } from './pages/users-list-page/users-list-page.component';

export const routes: Routes = [
  {
    path: '',
    component: UsersListPageComponent
  },
  {
    path: ':id',
    component: UsersDetailPageComponent
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
export class UsersRoutingModule {}

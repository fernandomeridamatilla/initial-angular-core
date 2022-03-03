import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@core/guards/auth/auth.guard';

import { AuthLayoutModule } from './modules/auth-layout/auth-layout.module';
import { LoginModule } from './modules/public-layout/login/login.module';
import { NotFoundModule } from './modules/public-layout/not-found/not-found.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: async (): Promise<typeof LoginModule> =>
      (await import('./modules/public-layout/login/login.module')).LoginModule
  },
  {
    path: 'not-found',
    loadChildren: async (): Promise<NotFoundModule> =>
      (await import('./modules/public-layout/not-found/not-found.module'))
        .NotFoundModule
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: async (): Promise<AuthLayoutModule> =>
      (await import('./modules/auth-layout/auth-layout.module'))
        .AuthLayoutModule
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

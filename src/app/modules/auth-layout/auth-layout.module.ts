import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { AuthLayoutRoutingModule } from './auth-layout-routing.module';
import { AuthLayoutPageComponent } from './page/auth-layout-page/auth-layout-page.component';

@NgModule({
  declarations: [AuthLayoutPageComponent],
  imports: [SharedModule, AuthLayoutRoutingModule]
})
export class AuthLayoutModule {}

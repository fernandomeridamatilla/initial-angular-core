import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './page/login-page.component';

@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent],
  imports: [SharedModule, LoginRoutingModule],
})
export class LoginModule {}

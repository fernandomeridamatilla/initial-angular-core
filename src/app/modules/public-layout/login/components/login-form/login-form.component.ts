import { Component } from '@angular/core';

import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'ngx-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  constructor(private authService: AuthService) {}

  onClickSingIn(): void {
    this.authService.login();
  }
}

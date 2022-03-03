import { Component } from '@angular/core';
import { languages } from '@i18n/lang-loader';
import { TranslateService } from '@ngx-translate/core';

import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'initial-angular-core';

  constructor(
    translateService: TranslateService,
    private authService: AuthService
  ) {
    translateService.setDefaultLang(languages.es);
    translateService.use(languages.es);
  }

  onClickSingOut(): void {
    this.authService.logout();
  }
}

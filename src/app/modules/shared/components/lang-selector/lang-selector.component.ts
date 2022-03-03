import { Component } from '@angular/core';
import { languages } from '@i18n/lang-loader';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-lang-selector',
  templateUrl: './lang-selector.component.html'
})
export class LangSelectorComponent {
  constructor(private translateService: TranslateService) {}

  onClickEs(): void {
    this.translateService.use(languages.es);
  }

  onClickEn(): void {
    this.translateService.use(languages.en);
  }
}

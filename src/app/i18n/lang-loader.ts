import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { langFile as langGB } from './translations/lang-en-GB';
import { langFile as langES } from './translations/lang-es-ES';

export const languages = {
  es: 'es',
  en: 'en'
};

export class LangLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<unknown> {
    return lang === languages.en ? of(langGB) : of(langES);
  }
}

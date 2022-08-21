import { TranslateService } from '@ngx-translate/core';

export class AppTranslateService {
  localStorageKey = 'defaultLanguage';
  languagesList = ['pt-BR'];
  constructor(private _translate: TranslateService) {
    _translate.addLangs(this.languagesList);

    const defaultLanguageInStorage = localStorage.getItem(this.localStorageKey);

    if (defaultLanguageInStorage) {
      this.setDefaultLang(defaultLanguageInStorage);
    } else {
      this.setDefaultLang('pt-BR');
    }
  }

  public setDefaultLang(lang: string) {
    this._translate.setDefaultLang(lang);
    this._translate.use(lang);
  }
}

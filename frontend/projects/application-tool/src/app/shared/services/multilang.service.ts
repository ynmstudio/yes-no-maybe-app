import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

const APPLICATION_PREFERED_LANGUAGE_KEY = 'prefered_language';

@Injectable({
  providedIn: 'root',
})
export class MultilangService {
  availableLanguages = ['de', 'en'];
  defaultLanguage = 'en';

  private _currentLanguage = new BehaviorSubject<string>(this.defaultLanguage);
  public readonly currentLanguage$ = this._currentLanguage.asObservable();

  get currentLanguage() {
    return this._currentLanguage.value;
  }

  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: any
  ) {
    this.translate.addLangs(this.availableLanguages);
    this.checkLanguage();
  }

  checkLanguage(): string {
    let language = this.defaultLanguage;

    let preferedLanguage = localStorage.getItem(
      APPLICATION_PREFERED_LANGUAGE_KEY
    );
    if (preferedLanguage) {
      this.availableLanguages.find((lang) => lang === preferedLanguage) ||
        language;
      this.updateLanguage(preferedLanguage);
      return preferedLanguage;
    }
    const browserLang = this.translate.getBrowserLang();
    if (browserLang) {
      language =
        this.availableLanguages.find(
          (lang) =>
            lang ===
            this.translate.getBrowserLang().substring(0, 2).toLowerCase()
        ) || language;
    }
    this.updateLanguage(language);
    return language;
  }

  async updateLanguage(lang: string) {
    await this.translate.use(lang).toPromise();
    this.document.documentElement.lang = lang;
    localStorage.setItem(APPLICATION_PREFERED_LANGUAGE_KEY, lang);
    this._currentLanguage.next(lang);
  }
}
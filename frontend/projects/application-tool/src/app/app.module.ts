import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';

import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from './shared/shared.module';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// @TODO Delete on production
// @BODY check https://github.com/angular/angularfire/issues/2656
import 'firebase/auth';

import { USE_EMULATOR as AUTH_EMULATOR } from '@angular/fire/compat/auth';
import { USE_EMULATOR as DATABASE_EMULATOR } from '@angular/fire/compat/database';
import { USE_EMULATOR as STORAGE_EMULATOR } from '@angular/fire/compat/storage';
import {
  AngularFireFunctionsModule,
  REGION,
  USE_EMULATOR as FUNCTIONS_EMULATOR,
} from '@angular/fire/compat/functions';
import { DateAdapter, NativeDateAdapter } from '@angular/material/core';

import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeEn, 'en');
registerLocaleData(localeDe, 'de');

export class ToolMissingTranslationHandler
  implements MissingTranslationHandler
{
  handle(params: MissingTranslationHandlerParams) {
    return `<${params.key}>`;
  }
}

export class CustomDatePickerAdapter extends NativeDateAdapter {
  parse(value: string | number): Date | null {
    if (typeof value === 'string' && value.indexOf('.') > -1) {
      const str: string[] = value.split('.');
      if (
        str.length < 2 ||
        isNaN(+str[0]) ||
        isNaN(+str[1]) ||
        isNaN(+str[2])
      ) {
        return null;
      }
      return new Date(Number(str[2]), Number(str[1]) - 1, Number(str[0]));
    }
    const timestamp: number =
      typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    SharedModule.forRoot(),
    GraphQLModule,
    TranslateModule.forRoot({
      useDefaultLang: true,
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: ToolMissingTranslationHandler,
      },
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(
            http,
            './assets/i18n/',
            '.json?v=' + environment.version
          );
        },
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    // check firebase.json for matching ports
    // {
    //   provide: BUCKET,
    //   useValue: environment.production ? undefined : 'berlin-art-prize-dev',
    // },
    // {
    //   provide: AUTH_EMULATOR,
    //   useValue: environment.production ? undefined : ['http://localhost:9099'],
    // },
    // {
    //   provide: DATABASE_EMULATOR,
    //   useValue: environment.production ? undefined : ['http://localhost:9000'],
    // },
    // {
    //   provide: FUNCTIONS_EMULATOR,
    //   useValue: environment.production ? undefined : ['http://localhost:5001'],
    // },
    // {
    //   provide: STORAGE_EMULATOR,
    //   useValue: environment.production ? undefined : ['localhost', 9199],
    // },
    { provide: REGION, useValue: 'europe-west3' },
    { provide: DateAdapter, useClass: CustomDatePickerAdapter },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

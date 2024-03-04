import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter, withRouterConfig, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';
import { connectDatabaseEmulator, getDatabase, provideDatabase } from '@angular/fire/database';
import { connectFunctionsEmulator, getFunctions, provideFunctions } from '@angular/fire/functions';
import { connectStorageEmulator, getStorage, provideStorage } from '@angular/fire/storage';
import { fetchAndActivate, getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { environment } from '../environments/environment';
import { provideGraphQL } from './graphql.module';
import { DateAdapter, NativeDateAdapter } from '@angular/material/core';
import { SharedModule } from './shared/shared.module';
import { MissingTranslationHandler, MissingTranslationHandlerParams, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeDe from '@angular/common/locales/de';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthService, HasuraService } from '@library/services';
import { ApolloModule } from 'apollo-angular';
// import { provideServiceWorker } from '@angular/service-worker';
// import { providePromptUpdateService } from '@library/services/pwa';
registerLocaleData(localeEn, 'en');
registerLocaleData(localeDe, 'de');

export class ToolMissingTranslationHandler
  implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return `<${params.key}>`;
  }
}


export class CustomDatePickerAdapter extends NativeDateAdapter {
  override parse(value: string | number): Date | null {
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

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload',
        // paramsInheritanceStrategy: 'always'
      }),
      withViewTransitions()
    ),
    provideAnimationsAsync(),
    provideGraphQL(),

    provideHttpClient(),
    importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebase))),
    importProvidersFrom(provideAuth(() => {
      const auth = getAuth();
      if (isDevMode() && environment.useEmulators) {
        connectAuthEmulator(auth, 'http://localhost:9099');
      }
      return auth;
    })),
    importProvidersFrom(provideDatabase(() => {
      const database = getDatabase();
      if (isDevMode() && environment.useEmulators) {
        connectDatabaseEmulator(database, 'localhost', 9000);
      }
      return database;
    })),
    importProvidersFrom(provideFunctions(() => {
      const functions = getFunctions();
      functions.region = 'europe-west3';
      if (isDevMode() && environment.useEmulators) {
        connectFunctionsEmulator(functions, 'localhost', 5001);
      }
      return functions;
    })),
    importProvidersFrom(provideStorage(() => {
      const storage = getStorage();
      if (isDevMode() && environment.useEmulators) {
        connectStorageEmulator(storage, 'localhost', 9199);
      }
      return storage;
    })),
    importProvidersFrom(provideRemoteConfig(() => {
      const remoteConfig = getRemoteConfig();
      remoteConfig.settings.minimumFetchIntervalMillis = isDevMode() ? 3600000 : 43200000;
      const rcDefaults = require('./../remote_config_defaults.json');
      remoteConfig.defaultConfig = rcDefaults;
      console.log(remoteConfig.lastFetchStatus, remoteConfig.fetchTimeMillis)
      fetchAndActivate(remoteConfig);
      return remoteConfig;
    })),
    importProvidersFrom([
      SharedModule.forRoot(),
      ApolloModule,
      AuthService,
      HasuraService,
      TranslateModule.forRoot({
        useDefaultLang: true,
        missingTranslationHandler: {
          provide: MissingTranslationHandler,
          useClass: ToolMissingTranslationHandler,
        },
        loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => {
            return new TranslateHttpLoader(http, './assets/i18n/', '.json?v=' + environment.version);
          },
          deps: [HttpClient],
        },
      }),
    ]),

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
    { provide: DateAdapter, useClass: CustomDatePickerAdapter },
    // provideServiceWorker('ngsw-worker.js', {
    //   enabled: !isDevMode(),
    //   registrationStrategy: 'registerWhenStable:30000'
    // }),
    // providePromptUpdateService(),
  ],
};

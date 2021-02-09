import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import {
  FakeMissingTranslationHandler,
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from './shared/shared.module';
import { AngularFireDatabaseModule } from '@angular/fire/database';
// @TODO Delete on production
// @BODY check https://github.com/angular/angularfire/issues/2656
import 'firebase/auth';

import { USE_EMULATOR as AUTH_EMULATOR } from '@angular/fire/auth';
import { USE_EMULATOR as DATABASE_EMULATOR } from '@angular/fire/database';
import { USE_EMULATOR as FUNCTIONS_EMULATOR } from '@angular/fire/functions';

export class ToolMissingTranslationHandler
  implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return `<${params.key}>`;
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
          return new TranslateHttpLoader(http, './assets/i18n/', '.json');
        },
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: BUCKET, useValue: 'berlin-art-prize-dev' },
    // check firebase.json for matching ports
    {
      provide: AUTH_EMULATOR,
      useValue: environment.production ? undefined : ['localhost', 9099],
    },
    {
      provide: DATABASE_EMULATOR,
      useValue: environment.production ? undefined : ['localhost', 9000],
    },
    {
      provide: FUNCTIONS_EMULATOR,
      useValue: environment.production ? undefined : ['localhost', 5001],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

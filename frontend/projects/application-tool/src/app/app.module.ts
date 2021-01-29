import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { SharedModule } from './shared/shared.module';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { USE_EMULATOR as AUTH_EMULATOR } from '@angular/fire/auth';
import { USE_EMULATOR as DATABASE_EMULATOR } from '@angular/fire/database';
import { USE_EMULATOR as FUNCTIONS_EMULATOR } from '@angular/fire/functions';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    SharedModule.forRoot(),
    GraphQLModule,
  ],
  providers: [
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

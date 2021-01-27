import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

export interface User {
  loginName: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public emailVerified = new BehaviorSubject<boolean>(true);

  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private appService: AppService,
    private router: Router
  ) {
    this.afAuth.onAuthStateChanged(async (user) => {
      if (user) {
        console.warn('HELLO WORLD', user, user.emailVerified);

        const token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaim =
          idTokenResult.claims['https://hasura.io/jwt/claims'];

        if (hasuraClaim) {
          // setAuthState({ status: "in", user, token });
          console.warn(token);
        } else {
          // Check if refresh is required.
          const metadataRef = this.afDatabase.object(
            'metadata/' + user.uid + '/refreshTime'
          );
          metadataRef.valueChanges().subscribe(async (data: any) => {
            if (!data) return;
            // Force refresh to pick up the latest custom claims changes.
            const token = await user.getIdToken(true);
            // setAuthState({ status: "in", user, token });
            console.warn(token);
          });
        }
        // Set Email Verification Banner
        this.emailVerified.next(user.emailVerified);
      } else {
        // setAuthState({ status: "out" });
        console.log('OUT');
      }
    });
  }

  async register(email: string, password: string) {
    await this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        if (!result.user?.emailVerified) result.user?.sendEmailVerification();

        console.log('AuthService >> register > user', result);

        this.router.navigate(['u']);
        this.afAuth.idTokenResult
          .toPromise()
          .then((result) => console.log(result));
      })
      .catch((error) => this.appService.message(error));
  }

  async forgot(email: string) {
    await this.afAuth
      .sendPasswordResetEmail(email)
      .then(() => this.appService.message('Please check your inbox', 'success'))
      .catch((error) => this.appService.message(error));
  }

  async login(email: string, password: string) {
    await this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('AuthService >> login > user', result);

        this.router.navigate(['u']);
        this.afAuth.idTokenResult
          .toPromise()
          .then((result) => console.log(result));
        this.appService.message('');
      })
      .catch((error) => this.appService.message(error));
  }

  async sendEmailVerification() {
    await this.afAuth
      .onAuthStateChanged((user) => user?.sendEmailVerification())
      .catch((error) => this.appService.message(error));
  }
  async logout() {
    await this.afAuth.signOut();
    this.router.navigate(['/auth']);
  }
}

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { catchError, first, map, tap } from 'rxjs/operators';
import { fuzzy } from 'fast-fuzzy';

export interface User {
  loginName: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public emailVerified = new BehaviorSubject<boolean>(true);

  get authState() {
    return this.afAuth.authState;
  }

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

  async register(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (!result.user?.emailVerified) result.user?.sendEmailVerification();

      console.log('AuthService >> register > user', result);

      const user = await this.afAuth.currentUser;
      await user?.updateProfile({
        displayName: `${firstName} ${lastName}`,
      });

      const idTokenResult = await result.user?.getIdTokenResult(true);

      if (idTokenResult) {
        switch (idTokenResult.claims['role']) {
          case 'user':
            this.router.navigate(['u', 'dashboard']);
            break;
          case 'jury':
            this.router.navigate(['j', 'dashboard']);
            break;
          case 'team':
            this.router.navigate(['t', 'dashboard']);
            break;
          default:
            this.router.navigate(['u', 'dashboard']);
            break;
        }
      }
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode == 'auth/weak-password') {
        this.appService.message('The password is too weak.');
      } else {
        this.appService.message(error);
      }
    }
  }

  async forgot(email: string) {
    await this.afAuth.useDeviceLanguage();
    await this.afAuth
      .sendPasswordResetEmail(email)
      .then(() => this.appService.message('Please check your inbox', 'success'))
      .catch((error) => this.appService.message(error));
  }

  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      console.log('AuthService >> login > user', result);

      const idTokenResult = await result.user?.getIdTokenResult(true);

      if (idTokenResult) {
        switch (idTokenResult.claims['role']) {
          case 'user':
            this.router.navigate(['u', 'dashboard']);
            break;
          case 'jury':
            this.router.navigate(['j', 'dashboard']);
            break;
          case 'team':
            this.router.navigate(['t', 'dashboard']);
            break;
          default:
            this.router.navigate(['u', 'dashboard']);
            break;
        }
      }
    } catch (error) {
      this.appService.message(error);
    }
  }

  async sendEmailVerification() {
    this.afAuth.useDeviceLanguage();
    await this.afAuth
      .onAuthStateChanged((user) => user?.sendEmailVerification())
      .catch((error) => this.appService.message(error));
  }
  async logout() {
    await this.afAuth.signOut();
    this.router.navigate(['/auth']);
  }

  // Reactive Form Validator
  checkRevealedUsername(): AsyncValidatorFn {
    return (ctrl: AbstractControl): Observable<ValidationErrors | null> => {
      return this.afAuth.user.pipe(
        first(),
        map((user) => {
          const displayName = user?.displayName;
          if (!displayName || !ctrl.value) return null;
          return fuzzy(displayName!, ctrl.value) >= 0.83
            ? { nameRevealed: true }
            : null;
        }),
        catchError((error) => {
          console.error(error);
          return of(null);
        })
      );
    };
  }
}

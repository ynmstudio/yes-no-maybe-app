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
  ValidatorFn,
} from '@angular/forms';
import { catchError, first, map, tap } from 'rxjs/operators';
import { fuzzy } from 'fast-fuzzy';
import { HasuraService } from './hasura.service';
import { AlertService } from '../components/alert/alert.service';

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
  get currentUser() {
    return this.afAuth.currentUser;
  }

  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private appService: AppService,
    private alertService: AlertService,
    private hasuraService: HasuraService,
    private router: Router
  ) {
    this.afAuth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult(true);
        const hasuraRole = idTokenResult.claims['role'];

        if (hasuraRole) {
          // setAuthState({ status: "in", user, token });
          // console.debug(token, hasuraRole);
        } else {
          // Check if refresh is required.
          const metadataRef = this.afDatabase.object(
            'metadata/' + user.uid + '/refreshTime'
          );
          metadataRef.valueChanges().subscribe(async (data: any) => {
            if (!data) return;
            // Force refresh to pick up the latest custom claims changes.
            const token = await user.getIdToken(true);
            const idTokenResult = await user.getIdTokenResult(true);
            const hasuraRole = idTokenResult.claims['role'];
            console.log(hasuraRole);
            // setAuthState({ status: "in", user, token });
            await this.hasuraService.updateUsername(
              user.displayName || 'Anonymous'
            );
            // console.debug(token);
          });
        }

        // Set Email Verification Banner
        setTimeout(() => {
          this.emailVerified.next(user.emailVerified);
        }, 2500);
      } else {
        // setAuthState({ status: "out" });
        // console.debug('Logged out');
      }
    });
  }

  async register(displayName: string, email: string, password: string) {
    try {
      if (!displayName) {
        throw new Error('Trying to register with no displayName');
      }
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      // if (!result.user?.emailVerified) result.user?.sendEmailVerification();

      // console.debug('AuthService >> register > user', result);

      const user = await this.afAuth.currentUser;

      await user?.updateProfile({
        displayName,
      });

      const idTokenResult = await result.user?.getIdTokenResult(true);

      if (idTokenResult && idTokenResult?.claims['role']) {
        await this.hasuraService.updateUsername(displayName);
        this.redirectToDashboard(idTokenResult?.claims['role']);
      } else {
        // Check if refresh is required.
        const metadataRef = this.afDatabase.object(
          'metadata/' + user?.uid + '/refreshTime'
        );
        const subscription = metadataRef
          .valueChanges()
          .subscribe(async (data: any) => {
            if (!data) return;

            // Force refresh to pick up the latest custom claims changes.
            const idTokenResult = await user?.getIdTokenResult(true);

            if (!idTokenResult?.claims['role']) return;

            await this.hasuraService.updateUsername(displayName);

            subscription.unsubscribe();
            this.redirectToDashboard(idTokenResult?.claims['role']);
          });
      }
    } catch (error: any) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(error);

      if (errorCode == 'auth/weak-password') {
        this.alertService.info('The password is too weak.');
      } else {
        this.alertService.error(error);
      }
    }
  }

  async forgot(email: string) {
    await this.afAuth.useDeviceLanguage();
    await this.afAuth
      .sendPasswordResetEmail(email)
      .then(() => this.alertService.info('Please check your inbox', 'success'))
      .catch((error) => this.alertService.error(error));
  }

  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      // console.debug('AuthService >> login > user', result);

      const idTokenResult = await result.user?.getIdTokenResult(true);

      await this.hasuraService.updateUsername(
        result.user?.displayName || 'Anonymous'
      );

      if (idTokenResult) {
        this.redirectToDashboard(idTokenResult.claims['role']);
      }
    } catch (error) {
      this.alertService.error(error);
    }
  }

  async updateDisplayName(name: string) {
    if (!name) {
      this.alertService.error('Please enter a valid name!');
      return;
    }
    this.afAuth.useDeviceLanguage();
    var user = await this.afAuth.currentUser;

    try {
      await user?.updateProfile({
        displayName: name,
      });
      await this.hasuraService.updateUsername(name);
    } catch (error) {
      throw error;
    }
  }
  async updateEmail(email: string) {
    if (!email) {
      this.alertService.error('Please enter a valid email address!');
      return;
    }
    this.afAuth.useDeviceLanguage();
    var user = await this.afAuth.currentUser;

    try {
      await user?.updateEmail(email);
    } catch (error) {
      throw error;
    }
  }

  async updatePassword(password: string) {
    if (!password) {
      this.alertService.error('Please enter a password');
      return;
    }
    this.afAuth.useDeviceLanguage();
    var user = await this.afAuth.currentUser;

    try {
      await user?.updatePassword(password);
    } catch (error) {
      throw error;
    }
  }

  async sendEmailVerification() {
    this.afAuth.useDeviceLanguage();
    try {
      const user = await this.afAuth.currentUser;
      if (!user) return;
      user.sendEmailVerification();
      this.emailVerified.next(true);
    } catch (error) {
      this.alertService.error(error);
    }
  }
  async logout() {
    await this.afAuth.signOut();
    this.router.navigate(['/auth']);
  }

  redirectToDashboard(role: string) {
    switch (role) {
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

/** A hero's name can't match the hero's alter ego */
export const passwordsMustMatch: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value !== confirmPassword.value
    ? { mustMatch: true }
    : null;
};

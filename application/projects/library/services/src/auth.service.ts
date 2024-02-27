import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { catchError, first, map } from 'rxjs/operators';
import { fuzzy } from 'fast-fuzzy';
import { HasuraService } from './hasura.service';
import { AlertService } from '../../components/alert/src/alert.service';
import { Auth, authState, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateEmail, updatePassword, updateProfile, user } from '@angular/fire/auth';
import { Database, object, query, ref } from '@angular/fire/database';

export interface User {
  loginName: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private database: Database = inject(Database);
  public authState$ = authState(this.auth);
  public emailVerified = new BehaviorSubject<boolean>(true);

  public get currentUser() {
    var user = this.auth.currentUser;
    if (!user) console.error('User not found!');
    return user;
  }
  constructor(
    private alertService: AlertService,
    private hasuraService: HasuraService,
    private router: Router
  ) {

    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult(true);
        const hasuraRole = idTokenResult.claims['role'];

        if (hasuraRole) {
          // setAuthState({ status: "in", user, token });
          // console.debug(token, hasuraRole);
        } else {
          // Check if refresh is required.
          const metadataRef = object(
            ref(this.database, 'metadata/' + user.uid + '/refreshTime')
          );
          metadataRef.subscribe(async (data: any) => {
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
      const result = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      // if (!result.user?.emailVerified) result.user?.sendEmailVerification();

      // console.debug('AuthService >> register > user', result);

      const user = this.auth.currentUser;
      if (user) {

        await updateProfile(user, { displayName })
      }


      const idTokenResult = await result.user?.getIdTokenResult(true);
      const role = idTokenResult?.claims['role'] as string;



      if (idTokenResult && role) {
        await this.hasuraService.updateUsername(displayName);
        this.redirectToDashboard(role);
      } else {
        // Check if refresh is required.
        const metadataRef = object(
          ref(this.database, 'metadata/' + user?.uid + '/refreshTime')
        );
        const subscription = metadataRef
          .subscribe(async (data: any) => {
            if (!data) return;
            console.log(data)

            // Force refresh to pick up the latest custom claims changes.
            const idTokenResult = await user?.getIdTokenResult(true);
            console.log(idTokenResult)
            if (!role) return;

            await this.hasuraService.updateUsername(displayName);

            subscription.unsubscribe();
            this.redirectToDashboard(role);
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
    this.auth.useDeviceLanguage();
    await sendPasswordResetEmail(this.auth, email)
      .then(() => this.alertService.info('Please check your inbox', 'success'))
      .catch((error) => this.alertService.error(error));
  }

  async login(email: string, password: string) {
    try {
      const result = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      // console.debug('AuthService >> login > user', result);

      const idTokenResult = await result.user?.getIdTokenResult(true);
      const role = idTokenResult.claims['role'] as string;

      await this.hasuraService.updateUsername(
        result.user?.displayName || 'Anonymous'
      );

      if (idTokenResult && role) {
        this.redirectToDashboard(role);
      }
    } catch (error: any) {
      this.alertService.error(error);
    }
  }

  async updateDisplayName(name: string) {
    if (!name) {
      this.alertService.error('Please enter a valid name!');
      return;
    }
    this.auth.useDeviceLanguage();
    var user = this.auth.currentUser;
    if (!user) {
      this.alertService.error('User not found!');
      return;
    }
    try {
      await updateProfile(user, {
        displayName: name,
      });
      await this.hasuraService.updateUsername(name);
    } catch (error: any) {
      throw error;
    }
  }
  async updateEmail(email: string) {
    if (!email) {
      this.alertService.error('Please enter a valid email address!');
      return;
    }
    this.auth.useDeviceLanguage();

    var user = this.auth.currentUser;
    if (!user) {
      this.alertService.error('User not found!');
      return;
    }

    try {
      await updateEmail(user, email);
    } catch (error: any) {
      throw error;
    }
  }

  async updatePassword(password: string) {
    if (!password) {
      this.alertService.error('Please enter a password');
      return;
    }
    this.auth.useDeviceLanguage();
    var user = this.auth.currentUser;
    if (!user) {
      this.alertService.error('User not found!');
      return;
    }
    try {
      await updatePassword(user, password);
    } catch (error: any) {
      throw error;
    }
  }

  async sendEmailVerification() {
    this.auth.useDeviceLanguage();
    try {
      const user = await this.auth.currentUser;
      if (!user) return;
      sendEmailVerification(user);
      this.emailVerified.next(true);
    } catch (error: any) {
      this.alertService.error(error);
    }
  }
  async logout() {
    await this.auth.signOut();
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
      return user(this.auth).pipe(
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

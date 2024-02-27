import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmLoginComponent as ConfirmLoginComponentType, ModalService } from '@library/components/modal';
import { SharedModule } from '../../shared/shared.module';
import { routes } from './profile.routes';
import { ROUTES } from '@angular/router';
import { AuthService, passwordsMustMatch } from '@library/services';
import { AlertService } from '@library/components/alert';

@Component({
  standalone: true,
  selector: 'app-profile',
  imports: [SharedModule],
  providers: [{
    provide: ROUTES,
    useValue: routes
  }],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user$;
  form: FormGroup;

  displayName = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  confirmPassword = new FormControl('', Validators.required);

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
    private modalService: ModalService<ConfirmLoginComponentType>,
    private translate: TranslateService
  ) {
    this.form = this.fb.group(
      {
        displayName: this.displayName,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      },
      {
        validators: passwordsMustMatch,
      }
    );
    this.user$ = this.authService.authState$;

    this.user$.subscribe((user) => {
      this.form.markAsUntouched();
      this.displayName.setValue(user?.displayName ?? null);
      this.email.setValue(user?.email ?? null);
    });
  }

  ngOnInit(): void { }

  back(): void {
    this.location.back();
  }

  showChangePassword: boolean = false;
  toggleChangePassword() {
    this.showChangePassword = !this.showChangePassword;
  }
  async saveDisplayName() {
    if (this.displayName.invalid) return;
    try {
      if (this.displayName.value) await this.authService.updateDisplayName(this.displayName.value);
      this.displayName.markAsPristine();
    } catch (error: any) {
      if (error.code === 'auth/requires-recent-login') {
        await this.confirmLogin();
      } else {
        this.alertService.error(error);
      }
      return;
    }
    this.alertService.success(
      this.translate.instant('snippets.auth.username-saved')
    );
  }
  async saveNewEmail() {
    if (this.email.invalid) return;

    try {
      await this.authService.updateEmail(this.email.value ?? '');
      this.email.markAsPristine();
    } catch (error: any) {
      if (error.code === 'auth/requires-recent-login') {
        await this.confirmLogin();
      } else {
        this.alertService.error(error);
      }
      return;
    }
    this.alertService.success(
      this.translate.instant('snippets.auth.email-saved')
    );
  }

  async saveNewPassword() {
    if (this.password.invalid || (this.form.errors && this.form.errors['mustMatch'])) return;

    try {
      if (this.password.value) await this.authService.updatePassword(this.password.value);
      this.showChangePassword = false;
      this.password.setValue('');
      this.confirmPassword.setValue('');
      this.password.markAsPristine();
      this.confirmPassword.markAsPristine();
      this.password.updateValueAndValidity();
      this.confirmPassword.updateValueAndValidity();
    } catch (error: any) {
      if (error.code === 'auth/requires-recent-login') {
        await this.confirmLogin();
      } else {
        this.alertService.error(error);
      }
      return;
    }
    this.alertService.success(
      this.translate.instant('snippets.auth.password-saved')
    );
  }

  async confirmLogin() {
    const { ConfirmLoginComponent } = await import(
      '@library/components/modal'
    );
    const user = await this.authService.currentUser;
    return this.modalService.open(ConfirmLoginComponent, user?.email);
  }
}

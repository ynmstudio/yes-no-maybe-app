import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from '../../shared/components/alert/alert.service';
import { ModalService } from '../../shared/components/modal/modal.service';
import { ConfirmLoginComponent as ConfirmLoginComponentType } from '../../shared/components/modal/modals/confirm-login/confirm-login.component';
import {
  AuthService,
  passwordsMustMatch,
} from '../../shared/services/auth.service';

@Component({
  selector: 'app-profile',
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
    this.user$ = this.authService.authState;

    this.user$.subscribe((user) => {
      this.form.markAsUntouched();
      this.displayName.setValue(user?.displayName);
      this.email.setValue(user?.email);
    });
  }

  ngOnInit(): void {}

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
      await this.authService.updateDisplayName(this.displayName.value);
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
      await this.authService.updateEmail(this.email.value);
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
    if (this.password.invalid || this.form.errors?.mustMatch) return;

    try {
      await this.authService.updatePassword(this.password.value);
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
      './../../shared/components/modal/modals/confirm-login/confirm-login.component'
    );
    const user = await this.authService.currentUser;
    return this.modalService.open(ConfirmLoginComponent, user?.email);
  }
}

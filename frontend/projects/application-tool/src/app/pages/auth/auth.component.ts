import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {
  AuthService,
  passwordsMustMatch,
} from '../../shared/services/auth.service';

export type AuthMode = 'login' | 'register' | 'forgot';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  mode: AuthMode = 'login';

  form: FormGroup;
  displayName = new FormControl('');
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);
  confirmPassword = new FormControl('', Validators.required);
  confirmPrivacy = new FormControl(false);

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.form = this.fb.group(
      {
        displayName: this.displayName,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        confirmPrivacy: this.confirmPrivacy,
      },
      {
        validators: passwordsMustMatch,
      }
    );

    this.route.queryParams.subscribe((params) => {
      switch (params['type'] as AuthMode) {
        case 'register':
          this.mode = 'register';
          this.form.controls['displayName'].setValidators([
            Validators.required,
          ]);
          this.form.controls['password'].setValidators([
            Validators.required,
            Validators.minLength(6),
          ]);
          this.form.controls['password'].setValue('');
          this.form.controls['confirmPassword'].setValidators([
            Validators.required,
          ]);
          this.form.controls['confirmPassword'].setValue('');
          this.form.setValidators([passwordsMustMatch]);
          this.form.controls['confirmPrivacy'].setValidators([
            Validators.requiredTrue,
          ]);
          this.form.controls['confirmPrivacy'].setValue(false);

          break;
        case 'forgot':
          this.mode = 'forgot';
          this.form.controls['displayName'].setValidators([]);
          this.form.controls['password'].setValidators([]);
          this.form.controls['password'].setValue('');
          this.form.controls['confirmPassword'].setValidators([]);
          this.form.controls['confirmPassword'].setValue('');
          this.form.controls['confirmPrivacy'].setValidators([]);
          this.form.controls['confirmPrivacy'].setValue(false);
          this.form.setValidators([]);
          break;
        default:
          this.mode = 'login';
          this.form.controls['displayName'].setValidators([]);
          this.form.controls['password'].setValidators([Validators.required]);
          this.form.controls['password'].setValue('');
          this.form.controls['confirmPassword'].setValidators([]);
          this.form.controls['confirmPassword'].setValue('');
          this.form.controls['confirmPrivacy'].setValidators([]);
          this.form.controls['confirmPrivacy'].setValue(false);
          this.form.setValidators([]);
          break;
      }
      this.form.controls['displayName'].updateValueAndValidity();
      this.form.controls['password'].updateValueAndValidity();
      this.form.controls['confirmPassword'].updateValueAndValidity();
      this.form.controls['confirmPrivacy'].updateValueAndValidity();
      this.form.updateValueAndValidity();
    });
  }

  ngOnInit(): void {}

  togglePrivacyConfirmation() {
    this.confirmPrivacy.setValue(!this.confirmPrivacy.value);
  }

  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.authService.login(this.form.value.email, this.form.value.password);
  }
  register() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.authService.register(
      this.form.value.displayName,
      this.form.value.email,
      this.form.value.password
    );
  }
  forgot() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.authService.forgot(this.form.value.email);
  }
}

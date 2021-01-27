import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

export type AuthMode = 'login' | 'register' | 'forgot';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  mode: AuthMode = 'login';

  form: FormGroup;
  loginName = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);
  confirmPrivacy = new FormControl(false);

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      loginName: this.loginName,
      password: this.password,
      confirmPrivacy: this.confirmPrivacy,
    });

    this.route.queryParams.subscribe((params) => {
      switch (params['type'] as AuthMode) {
        case 'register':
          this.mode = 'register';
          this.form.controls['password'].setValidators([Validators.required]);
          this.form.controls['password'].setValue('');
          this.form.controls['confirmPrivacy'].setValidators([
            Validators.requiredTrue,
          ]);
          this.form.controls['confirmPrivacy'].setValue(false);

          break;
        case 'forgot':
          this.mode = 'forgot';
          this.form.controls['password'].setValidators([]);
          this.form.controls['password'].setValue('');
          this.form.controls['confirmPrivacy'].setValidators([]);
          this.form.controls['confirmPrivacy'].setValue(false);
          break;
        default:
          this.mode = 'login';
          this.form.controls['password'].setValidators([Validators.required]);
          this.form.controls['password'].setValue('');
          this.form.controls['confirmPrivacy'].setValidators([]);
          this.form.controls['confirmPrivacy'].setValue(false);
          break;
      }
      this.form.controls['password'].updateValueAndValidity();
      this.form.controls['confirmPrivacy'].updateValueAndValidity();
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
    this.authService.login(this.form.value.loginName, this.form.value.password);
  }
  register() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.authService.register(
      this.form.value.loginName,
      this.form.value.password
    );
  }
  forgot() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.authService.forgot(this.form.value.loginName);
  }
}

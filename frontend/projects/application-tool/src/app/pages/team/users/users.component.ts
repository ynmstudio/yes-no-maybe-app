import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AlertService } from '../../../shared/components/alert/alert.service';
import { FirebaseService } from '../../../shared/services/firebase.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  allUsers$: Observable<any[]>;

  newUserForm: FormGroup;
  displayName = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.email, Validators.required]);
  role = new FormControl('jury', Validators.required);

  newUsers: any[] = [];

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService,
    private alertService: AlertService
  ) {
    this.allUsers$ = this.getUsers();

    this.newUserForm = this.fb.group({
      displayName: this.displayName,
      email: this.email,
      role: this.role,
    });
  }

  ngOnInit(): void {}

  async deleteUser(uid: string) {
    try {
      const response = await this.firebaseService.deleteUser(uid).toPromise();
      this.reloadUsers();
    } catch (error) {
      this.alertService.error(error);
    }
  }
  async toggleUserStatus(uid: string, disabled: boolean) {
    try {
      const response = await this.firebaseService
        .toggleUserStatus(uid, disabled)
        .toPromise();
      this.reloadUsers();
    } catch (error) {
      this.alertService.error(error);
    }
  }
  async onRoleChange(uid: string, target?: HTMLSelectElement) {
    try {
      const response = await this.firebaseService
        .changeUserRole(uid, target?.value || 'user')
        .toPromise();
      this.reloadUsers();
    } catch (error) {
      this.alertService.error(error);
    }
  }
  public getUsers(role?: string) {
    return this.reloader$.pipe(
      switchMap(() => this.firebaseService.getUsers(role))
    );
  }
  reloader$ = new BehaviorSubject(null);
  public reloadUsers() {
    this.reloader$.next(null);
  }

  async createUser() {
    if (this.newUserForm.invalid) return;
    try {
      const response = await this.firebaseService
        .createUser(this.displayName.value, this.email.value, this.role.value)
        .toPromise();

      this.newUsers.push({
        displayName: this.displayName.value,
        email: this.email.value,
        role: this.role.value,
        password: response.password,
      });
      this.newUserForm.reset();
      this.role.setValue('jury');
    } catch (error) {
      this.alertService.error(error);
    }
  }

  trackByUid(index: number, item: any) {
    return item.uid;
  }
  trackByKey(index: number, item: any) {
    return item.key;
  }
}

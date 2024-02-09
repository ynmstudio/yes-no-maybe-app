import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private fns: AngularFireFunctions) { }

  getUsers(role?: string) {
    const getAllUsers = this.fns.httpsCallable('getAllUsers');
    return getAllUsers({ role });
  }

  createUser(displayName: string, email: string, role: string = 'jury') {
    const createUser = this.fns.httpsCallable('createUser');
    return createUser({ displayName, email, role });
  }
  deleteUser(uid: string) {
    const deleteUser = this.fns.httpsCallable('deleteUser');
    return deleteUser({ uid });
  }
  changeUserRole(uid: string, role: string) {
    const changeUserRole = this.fns.httpsCallable('changeUserRole');
    return changeUserRole({ uid, role });
  }
  toggleUserStatus(uid: string, disabled: boolean) {
    const toggleUserStatus = this.fns.httpsCallable('toggleUserStatus');
    return toggleUserStatus({ uid, disabled });
  }
}

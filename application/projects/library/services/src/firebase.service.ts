import { Injectable, inject } from '@angular/core';
import { Functions, httpsCallable } from '@angular/fire/functions';

interface CreateUser {
  displayName: string;
  email: string;
  role: string
}

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

  functions = inject(Functions);

  getUsers(role?: string) {
    const getAllUsers = httpsCallable<GetAllUsersDataObject, Array<any>>(this.functions, 'getAllUsers');
    return getAllUsers({ role });
  }

  createUser(displayName: string, email: string, role: string = 'jury') {
    const createUser = httpsCallable<CreateUserDataObject, CreateUserResponse>(this.functions, 'createUser');
    return createUser({ displayName, email, role });
  }
  deleteUser(uid: string) {
    const deleteUser = httpsCallable<DeleteUserDataObject>(this.functions, 'deleteUser');
    return deleteUser({ uid });
  }
  changeUserRole(uid: string, role: string) {
    const changeUserRole = httpsCallable<ChangeUserRoleDataObject>(this.functions, 'changeUserRole');
    return changeUserRole({ uid, role });
  }
  toggleUserStatus(uid: string, disabled: boolean) {
    const toggleUserStatus = httpsCallable<ToggleUserStatusDataObject>(this.functions, 'toggleUserStatus');
    return toggleUserStatus({ uid, disabled });
  }
}

interface CreateUserDataObject {
  displayName: string;
  email: string;
  role: string;
}
interface CreateUserResponse { password: string }
interface DeleteUserDataObject {
  uid: string;
}
interface ToggleUserStatusDataObject {
  uid: string;
  disabled: boolean;
}
interface ChangeUserRoleDataObject {
  uid: string;
  role: string;
}

interface GetAllUsersDataObject {
  role?: string;
}
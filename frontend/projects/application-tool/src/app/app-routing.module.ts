import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AngularFireAuthGuard,
  AuthPipe,
  canActivate,
  hasCustomClaim,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { pipe } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { customClaims } from '@angular/fire/auth-guard';

// the roles are based on hasura rights management. we are using following rules: 'user', 'jury' and 'team'
// a role called 'admin' should not be used as hasura does not allow permission checks on this role.
const userOnly = (next: any) =>
  pipe(
    customClaims,
    map((claims) => claims['role'] === 'user'),
    map((hasRole) => (hasRole ? true : ['auth']))
  ) as AuthPipe;

const juryOnly = (next: any) =>
  pipe(
    customClaims,
    map((claims) => claims['role'] === 'jury'),
    map((hasRole) => (hasRole ? true : ['auth']))
  ) as AuthPipe;
const teamOnly = (next: any) =>
  pipe(
    customClaims,
    map((claims) => claims['role'] === 'team'),
    map((hasRole) => (hasRole ? true : ['auth']))
  ) as AuthPipe;

const redirectLoggedInToDashboard = (next: any) =>
  pipe(
    customClaims,
    map((claims: any) => {
      switch (claims['role'] as string) {
        case 'user':
          return ['u', 'dashboard'];
          break;
        case 'jury':
          return ['j', 'dashboard'];
          break;
        case 'team':
          return ['t', 'dashboard'];
          break;
        default:
          break;
      }
      return !(claims && claims['role']);
    })
  ) as AuthPipe;

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
    ...canActivate(redirectLoggedInToDashboard),
  },
  {
    path: 'u',
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserModule),
    // ...canActivate(userOnly),
  },
  {
    path: 'j',
    loadChildren: () =>
      import('./pages/jury/jury.module').then((m) => m.JuryModule),
    ...canActivate(juryOnly),
  },
  {
    path: 't',
    loadChildren: () =>
      import('./pages/team/team.module').then((m) => m.TeamModule),
    ...canActivate(teamOnly),
  },
  {
    path: '**',
    redirectTo: '/auth',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

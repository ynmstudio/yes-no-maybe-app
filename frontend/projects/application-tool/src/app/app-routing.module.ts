import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AngularFireAuthGuard,
  AuthPipe,
  canActivate,
  hasCustomClaim,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { customClaims } from '@angular/fire/auth-guard';

// the roles are based on hasura rights management. we are using following rules: 'user', 'jury' and 'team'
// a role called 'admin' should not be used as hasura does not allow permission checks on this role.
// const userOnly = () => hasCustomClaim('user');
const userOnly = (next: any) =>
  pipe(
    customClaims,
    map((claims) => {
      console.log(claims);
      return claims[`account-${next.params.accountId}-role`] === 'admin';
    })
  ) as AuthPipe;

const juryOnly = () => hasCustomClaim('jury');
const teamOnly = () => hasCustomClaim('team');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);

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
  },
  {
    path: 'u',
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserModule),
    ...canActivate(userOnly),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'j',
    loadChildren: () =>
      import('./pages/jury/jury.module').then((m) => m.JuryModule),
    ...canActivate(juryOnly),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 't',
    loadChildren: () =>
      import('./pages/team/team.module').then((m) => m.TeamModule),
    ...canActivate(teamOnly),
    ...canActivate(redirectUnauthorizedToLogin),
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

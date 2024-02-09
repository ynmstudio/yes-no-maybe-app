import { Routes } from '@angular/router';
import {
    AuthPipe, redirectUnauthorizedTo, canActivate, customClaims
} from '@angular/fire/auth-guard';
import { pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// the roles are based on hasura rights management. we are using following rules: 'user', 'jury' and 'team'
// a role called 'admin' should not be used as hasura does not allow permission checks on this role.
const userOnly = (next: any) =>
    pipe(
        customClaims,
        map((claims: any) => claims['role'] === 'user'),
        map((hasRole) => (hasRole ? true : ['auth'])),
        tap((redirect) => { console.log(redirect) })
    ) as AuthPipe;

const juryOnly = (next: any) =>
    pipe(
        customClaims,
        map((claims: any) => claims['role'] === 'jury'),
        map((hasRole) => (hasRole ? true : ['auth'])),
        tap((redirect) => { console.log(redirect) })
    ) as AuthPipe;
const teamOnly = (next: any) =>
    pipe(
        customClaims,
        map((claims: any) => claims['role'] === 'team'),
        map((hasRole) => (hasRole ? true : ['auth'])),
        tap((redirect) => { console.log(redirect) })
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
        }),
    ) as AuthPipe;

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        loadComponent: () =>
            import('./pages/auth/auth.component').then((c) => c.AuthComponent),
        ...canActivate(redirectLoggedInToDashboard),
    },
    {
        path: 'u',
        loadChildren: () =>
            import('./pages/user/user.routes'),
        ...canActivate(userOnly),
    },
    {
        path: 'j',
        loadChildren: () =>
            import('./pages/jury/jury.routes'),
        ...canActivate(juryOnly),
    },
    {
        path: 't',
        loadChildren: () =>
            import('./pages/team/team.routes'),
        ...canActivate(teamOnly),
    },
    {
        path: 'settings',
        loadComponent: () =>
            import('./pages/settings/settings.component').then((c) => c.SettingsComponent),
        ...canActivate(teamOnly),
    },
    {
        path: 'profile',
        loadComponent: () =>
            import('./pages/profile/profile.component').then((c) => c.ProfileComponent),
        ...redirectUnauthorizedTo(['auth']),
    },
    {
        path: '**',
        redirectTo: '/auth',
        pathMatch: 'full',
    },
];
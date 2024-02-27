import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { TeamComponent } from './team.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationsComponent } from '../applications/applications.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';

export default [
  {
    path: '',
    component: TeamComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then((c) => c.DashboardComponent),
      },
      {
        path: 'applications',
        loadChildren: () => import('../applications/applications.routes')
      },
      {
        path: 'settings',
        loadComponent: () => import('./settings/settings.component').then((c) => c.SettingsComponent),
      },
      {
        path: 'users',
        loadComponent: () => import('./users/users.component').then((c) => c.UsersComponent),
      },
    ],
  },
] satisfies Route[];

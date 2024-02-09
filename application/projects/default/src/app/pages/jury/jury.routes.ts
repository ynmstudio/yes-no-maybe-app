import { Route, Routes } from '@angular/router';
import { JuryComponent } from './jury.component';

export default [
  {
    path: '',
    component: JuryComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then((c) => c.DashboardComponent),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./search/search.component').then((c) => c.SearchComponent),
      },
    ],
  },
] satisfies Route[]

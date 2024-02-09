import { Route, Routes, } from '@angular/router';
import { ApplicationsComponent } from './applications.component';

export default [
  {
    path: '',
    component: ApplicationsComponent,
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./detail/detail.component').then((c) => c.DetailComponent),
  },
  {
    path: ':id/fullscreen',
    loadComponent: () =>
      import('./fullscreen/fullscreen.component').then((c) => c.FullscreenComponent),
  },
] satisfies Route[];
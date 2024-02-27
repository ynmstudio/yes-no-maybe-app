import { Route } from '@angular/router';
import { PendingChangesGuard, SubmissionIsOpenGuard } from '@library/guards';

export default [
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
    path: 'applications/:id',
    loadComponent: () =>
      import('./edit-application/edit-application.component').then(
        (c) => c.EditApplicationComponent
      ),
    canActivate: [SubmissionIsOpenGuard],
    canDeactivate: [PendingChangesGuard],
  },
  {
    path: 'applications/:id/fullscreen',
    loadComponent: () =>
      import('./preview-application/preview-application.component').then(
        (m) => m.PreviewApplicationComponent
      ),
  },
  {
    path: 'applications',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
] satisfies Route[]


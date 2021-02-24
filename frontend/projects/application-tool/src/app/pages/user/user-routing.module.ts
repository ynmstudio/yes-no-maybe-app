import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmissionIsOpenGuard } from '../../shared/guards/submission-is-open.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'applications/:id',
    loadChildren: () =>
      import('./edit-application/edit-application.module').then(
        (m) => m.EditApplicationModule
      ),
    canActivate: [SubmissionIsOpenGuard],
  },
  {
    path: 'applications',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}

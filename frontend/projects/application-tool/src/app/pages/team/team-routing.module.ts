import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team.component';

const routes: Routes = [
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
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'applications',
        loadChildren: () =>
          import('./../applications/applications.module').then(
            (m) => m.ApplicationsModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}

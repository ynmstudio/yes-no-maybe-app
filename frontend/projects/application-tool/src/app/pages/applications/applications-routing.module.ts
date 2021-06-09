import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationsComponent } from './applications.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationsComponent,
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./detail/detail.module').then((m) => m.DetailModule),
  },
  {
    path: ':id/fullscreen',
    loadChildren: () =>
      import('./fullscreen/fullscreen.module').then((m) => m.FullscreenModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationsRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendingChangesGuard } from '../../../shared/guards/pending-changes.guard';
import { EditApplicationComponent } from './edit-application.component';

const routes: Routes = [
  {
    path: '',
    component: EditApplicationComponent,
    canDeactivate: [PendingChangesGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditApplicationRoutingModule {}

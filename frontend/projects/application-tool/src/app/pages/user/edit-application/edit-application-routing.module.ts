import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditApplicationComponent } from './edit-application.component';

const routes: Routes = [
  {
    path: '',
    component: EditApplicationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditApplicationRoutingModule {}

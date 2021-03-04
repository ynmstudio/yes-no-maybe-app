import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviewApplicationComponent } from './preview-application.component';

const routes: Routes = [
  {
    path: '',
    component: PreviewApplicationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviewApplicationRoutingModule {}

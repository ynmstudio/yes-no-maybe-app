import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { EditApplicationRoutingModule } from './edit-application-routing.module';
import { EditApplicationComponent } from './edit-application.component';

@NgModule({
  declarations: [EditApplicationComponent],
  imports: [SharedModule, EditApplicationRoutingModule],
})
export class EditApplicationModule {}

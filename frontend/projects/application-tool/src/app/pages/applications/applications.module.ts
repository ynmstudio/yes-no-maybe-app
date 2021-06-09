import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsComponent } from './applications.component';

@NgModule({
  declarations: [ApplicationsComponent],
  imports: [SharedModule, ApplicationsRoutingModule],
})
export class ApplicationsModule {}

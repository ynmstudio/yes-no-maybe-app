import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';

@NgModule({
  declarations: [UserDashboardComponent],
  imports: [SharedModule, UserDashboardRoutingModule],
})
export class UserDashboardModule {}

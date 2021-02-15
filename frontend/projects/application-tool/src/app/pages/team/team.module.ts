import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { TeamRoutingModule } from './team-routing.module';
import { TeamService } from './team.service';
import { TeamComponent } from './team.component';

@NgModule({
  declarations: [TeamComponent],
  providers: [TeamService],
  imports: [SharedModule, TeamRoutingModule],
})
export class TeamModule {}

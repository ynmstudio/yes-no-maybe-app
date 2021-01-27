import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamService } from './team.service';

@NgModule({
  declarations: [],
  providers: [TeamService],
  imports: [CommonModule, TeamRoutingModule],
})
export class TeamModule {}

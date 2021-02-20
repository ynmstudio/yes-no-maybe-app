import { Component, OnInit } from '@angular/core';

import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  statistic$;
  state$;

  constructor(private teamService: TeamService) {
    this.statistic$ = this.teamService.getStatistic();
    this.state$ = this.teamService.getState();
  }

  ngOnInit(): void {}
}

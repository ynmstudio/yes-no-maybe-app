import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../../shared/services/auth.service';
import { TeamService } from '../team.service';

type Phase = 'stale' | 'application' | 'rating';

@Component({
  selector: 'app-team-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  statistic$;

  // DEV
  phase: Phase = 'rating';

  constructor(private teamService: TeamService) {
    this.statistic$ = this.teamService.getStatistic();
  }

  ngOnInit(): void {}
}

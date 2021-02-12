import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../../shared/services/auth.service';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user$;
  editions$;
  currentEdition$;
  selectedEdition$;
  statistic$;

  constructor(
    private authService: AuthService,
    private teamService: TeamService
  ) {
    this.user$ = this.authService.authState;
    this.editions$ = this.teamService.getAllEditions();
    this.currentEdition$ = this.teamService.currentEdition;
    this.selectedEdition$ = this.teamService.selectedEdition;
    this.statistic$ = this.teamService.getStatistic();
  }

  ngOnInit(): void {}

  showEditions: boolean = false;
  toggleEditionSelect() {
    this.showEditions = !this.showEditions;
  }
  async switchEdition(id: number) {
    await this.teamService.switchEdition(id);
    this.showEditions = false;
  }

  logout() {
    this.authService.logout();
  }
}

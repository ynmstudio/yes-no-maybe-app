import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  user$;
  editions$;
  currentEdition$;
  selectedEdition$;

  constructor(
    private authService: AuthService,
    private teamService: TeamService
  ) {
    this.user$ = this.authService.authState;
    this.editions$ = this.teamService.getAllEditions();
    this.currentEdition$ = this.teamService.currentEdition;
    this.selectedEdition$ = this.teamService.selectedEdition;
  }

  ngOnInit(): void {}

  showEditions: boolean = false;
  toggleEditionSelect() {
    this.showEditions = !this.showEditions;
  }
  async switchEdition(event: Event, id: number) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    await this.teamService.switchEdition(id);
    this.showEditions = false;
  }

  logout() {
    this.authService.logout();
  }
}

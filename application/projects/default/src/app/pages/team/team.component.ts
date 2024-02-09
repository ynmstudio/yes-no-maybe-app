import { Component, OnInit } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ModalService, NewEditionComponent, type NewEditionComponent as NewEditionComponentType } from '@library/components/modal';
import { AuthService } from '@library/services';
import { TeamService } from '@library/services/team';
@Component({
  standalone: true,
  selector: 'app-team',
  imports: [SharedModule, RouterModule],
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
    private teamService: TeamService,
    private modalService: ModalService<NewEditionComponentType>
  ) {
    this.user$ = this.authService.authState$;
    this.editions$ = this.teamService.getAllEditions();
    this.currentEdition$ = this.teamService.currentEdition;
    this.selectedEdition$ = this.teamService.selectedEdition;
  }

  ngOnInit(): void { }

  showEditions: boolean = false;
  toggleEditionSelect() {
    this.showEditions = !this.showEditions;
  }
  hideEditionSelect() {
    setTimeout(() => {
      this.showEditions = false;
    }, 300);
  }
  async switchEdition(event: Event, id: number) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    await this.teamService.switchEdition(id);
  }

  async showNewEditionModal() {
    return this.modalService.open(NewEditionComponent, '');
  }

  logout() {
    this.authService.logout();
  }
}

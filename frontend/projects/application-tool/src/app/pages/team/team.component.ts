import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { TeamService } from './team.service';
import { ModalService } from '../../shared/components/modal/modal.service';
import { NewEditionComponent as NewEditionComponentType } from './../../shared/components/modal/modals/new-edition/new-edition.component';
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
    private teamService: TeamService,
    private modalService: ModalService<NewEditionComponentType>
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
    const { NewEditionComponent } = await import(
      './../../shared/components/modal/modals/new-edition/new-edition.component'
    );
    return this.modalService.open(NewEditionComponent, '');
  }

  logout() {
    this.authService.logout();
  }
}

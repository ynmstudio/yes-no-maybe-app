import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  SetEditionWinnerGQL,
  GetRemainingApplicationsGQL,
} from 'generated/types.graphql-gen';
import { TeamService } from 'projects/application-tool/src/app/pages/team/team.service';
import { AlertService } from '../../../alert/alert.service';
import { ModalComponent } from '../../modal.component';

@Component({
  selector: 'app-confirm-winner',
  templateUrl: './confirm-winner.component.html',
  styleUrls: ['./confirm-winner.component.scss'],
})
export class ConfirmWinnerComponent implements OnInit {
  data!: {
    id: number;
  };

  remainingApplications$;

  selectedApplication: any;

  @ViewChild('modalComponent') modal:
    | ModalComponent<ConfirmWinnerComponent>
    | undefined;

  constructor(
    private teamService: TeamService,
    private setEditionWinnerGQL: SetEditionWinnerGQL,
    private getRemainingApplications: GetRemainingApplicationsGQL
  ) {
    this.remainingApplications$ = this.getRemainingApplications.fetch();
  }

  ngOnInit(): void {}

  async confirmWinner() {
    await this.teamService.setEditionWinner(this.selectedApplication.id);

    this.close();
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}

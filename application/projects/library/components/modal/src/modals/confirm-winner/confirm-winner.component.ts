import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  SetEditionWinnerGQL,
  GetRemainingApplicationsGQL,
} from 'generated/types.graphql-gen';
import { ModalComponent } from '../../modal.component';
import { TeamService } from '@library/services/team';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-confirm-winner',
  imports: [CommonModule, TranslateModule, ReactiveFormsModule, FormsModule, ModalComponent],
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
    private getRemainingApplications: GetRemainingApplicationsGQL
  ) {
    this.remainingApplications$ = this.getRemainingApplications.fetch();
  }

  ngOnInit(): void { }

  async confirmWinner() {
    await this.teamService.setEditionWinner(this.selectedApplication.id);

    this.close();
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}

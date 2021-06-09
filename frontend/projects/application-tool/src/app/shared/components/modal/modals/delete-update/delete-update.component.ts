import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkFragmentDoc } from 'generated/types.graphql-gen';
import { TeamService } from 'projects/application-tool/src/app/pages/team/team.service';
import { AlertService } from '../../../alert/alert.service';
import { ModalComponent } from '../../modal.component';

@Component({
  selector: 'app-delete-update',
  templateUrl: './delete-update.component.html',
  styleUrls: ['./delete-update.component.scss'],
})
export class DeleteUpdateComponent implements OnInit {
  data!: {
    id: number;
  };

  @ViewChild('modalComponent') modal:
    | ModalComponent<DeleteUpdateComponent>
    | undefined;

  constructor(
    private teamService: TeamService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  async confirmDeletion() {
    await this.teamService.deleteUpdate(this.data.id);

    try {
      await this.teamService.deleteUpdate(this.data.id);
    } catch (error) {
      this.alertService.error(error);
    }

    this.close();
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}

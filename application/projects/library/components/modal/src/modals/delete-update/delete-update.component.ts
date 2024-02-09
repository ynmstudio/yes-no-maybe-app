import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService } from '@library/components/alert';
import { TeamService } from '@library/services/team';
import { ModalComponent } from '../../modal.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  standalone: true,
  selector: 'app-delete-update',
  imports: [CommonModule, TranslateModule, ReactiveFormsModule, FormsModule, ModalComponent],
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
  ) { }

  ngOnInit(): void { }

  async confirmDeletion() {
    await this.teamService.deleteUpdate(this.data.id);

    try {
      await this.teamService.deleteUpdate(this.data.id);
    } catch (error: any) {
      this.alertService.error(error);
    }

    this.close();
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}

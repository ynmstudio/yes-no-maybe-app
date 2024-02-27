import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ModalService } from './modal.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CloseRoundComponent } from './modals/close-round/close-round.component';
import { ConfirmLoginComponent } from './modals/confirm-login/confirm-login.component';
import { ConfirmWinnerComponent } from './modals/confirm-winner/confirm-winner.component';
import { DeleteApplicationComponent } from './modals/delete-application/delete-application.component';
import { DeleteSpecificationComponent } from './modals/delete-specification/delete-specification.component';
import { DeleteUpdateComponent } from './modals/delete-update/delete-update.component';
import { DeleteWorkComponent } from './modals/delete-work/delete-work.component';
import { EditRoundComponent } from './modals/edit-round/edit-round.component';
import { EditUpdateComponent } from './modals/edit-update/edit-update.component';
import { NewEditionComponent } from './modals/new-edition/new-edition.component';
import { NewRoundComponent } from './modals/new-round/new-round.component';
import { NewUpdateComponent } from './modals/new-update/new-update.component';
import { RateApplicationComponent } from './modals/rate-application/rate-application.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent<T> implements AfterViewInit {
  display = false;

  @Input() boxed: boolean = true;

  constructor(private modalService: ModalService<T>) { }

  async close(): Promise<void> {
    this.display = false;

    setTimeout(async () => {
      await this.modalService.close();
    }, 300);
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.display = true;
    }, 100);
  }
}

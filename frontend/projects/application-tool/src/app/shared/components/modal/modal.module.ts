import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';
import { ConfirmLoginComponent } from './modals/confirm-login/confirm-login.component';
import { ConfirmWinnerComponent } from './modals/confirm-winner/confirm-winner.component';
import { DeleteApplicationComponent } from './modals/delete-application/delete-application.component';
import { DeleteWorkComponent } from './modals/delete-work/delete-work.component';
import { DeleteSpecificationComponent } from './modals/delete-specification/delete-specification.component';
import { RateApplicationComponent } from './modals/rate-application/rate-application.component';
import { NewEditionComponent } from './modals/new-edition/new-edition.component';
import { NewRoundComponent } from './modals/new-round/new-round.component';
import { EditRoundComponent } from './modals/edit-round/edit-round.component';
import { CloseRoundComponent } from './modals/close-round/close-round.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ModalComponent,
    ConfirmLoginComponent,
    ConfirmWinnerComponent,
    DeleteApplicationComponent,
    DeleteWorkComponent,
    DeleteSpecificationComponent,
    NewEditionComponent,
    RateApplicationComponent,
    NewRoundComponent,
    EditRoundComponent,
    CloseRoundComponent,
  ],
  exports: [
    ModalComponent,
    ConfirmLoginComponent,
    ConfirmWinnerComponent,
    DeleteApplicationComponent,
    DeleteWorkComponent,
    DeleteSpecificationComponent,
    NewEditionComponent,
    RateApplicationComponent,
    NewRoundComponent,
    EditRoundComponent,
  ],
  providers: [ModalService],
})
export class ModalModule {}

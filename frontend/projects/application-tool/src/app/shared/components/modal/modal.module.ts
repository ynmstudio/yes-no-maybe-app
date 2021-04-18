import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';
import { ConfirmLoginComponent } from './modals/confirm-login/confirm-login.component';
import { DeleteApplicationComponent } from './modals/delete-application/delete-application.component';
import { DeleteWorkComponent } from './modals/delete-work/delete-work.component';
import { DeleteSpecificationComponent } from './modals/delete-specification/delete-specification.component';
import { RateApplicationComponent } from './modals/rate-application/rate-application.component';
import { NewEditionComponent } from './modals/new-edition/new-edition.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FormsModule],
  declarations: [
    ModalComponent,
    ConfirmLoginComponent,
    DeleteApplicationComponent,
    DeleteWorkComponent,
    DeleteSpecificationComponent,
    NewEditionComponent,
    RateApplicationComponent,
  ],
  exports: [
    ModalComponent,
    ConfirmLoginComponent,
    DeleteApplicationComponent,
    DeleteWorkComponent,
    DeleteSpecificationComponent,
    NewEditionComponent,
    RateApplicationComponent,
  ],
  providers: [ModalService],
})
export class ModalModule {}

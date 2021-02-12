import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';
import { DeleteApplicationComponent } from './modals/delete-application/delete-application.component';
import { DeleteWorkComponent } from './modals/delete-work/delete-work.component';
import { DeleteSpecificationComponent } from './modals/delete-specification/delete-specification.component';

@NgModule({
  declarations: [ModalComponent, DeleteApplicationComponent, DeleteWorkComponent, DeleteSpecificationComponent],
  exports: [ModalComponent, DeleteApplicationComponent],
  providers: [ModalService],
  imports: [CommonModule],
})
export class ModalModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';
import { DeleteApplicationComponent } from './modals/delete-application/delete-application.component';

@NgModule({
  declarations: [ModalComponent, DeleteApplicationComponent],
  exports: [ModalComponent, DeleteApplicationComponent],
  providers: [ModalService],
  imports: [CommonModule],
})
export class ModalModule {}

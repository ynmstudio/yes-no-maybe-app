import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadTaskComponent } from './upload-task.component';

@NgModule({
  declarations: [UploadTaskComponent],
  exports: [UploadTaskComponent],
  imports: [CommonModule],
})
export class UploadTaskModule {}

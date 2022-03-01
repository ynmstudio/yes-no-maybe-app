import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideByStatusPipe } from './hide-by-status.pipe';

@NgModule({
  declarations: [HideByStatusPipe],
  exports: [HideByStatusPipe],
  imports: [CommonModule],
})
export class HideByStatusModule {}

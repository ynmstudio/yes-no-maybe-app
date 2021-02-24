import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetScorePipe } from './get-score.pipe';

@NgModule({
  declarations: [GetScorePipe],
  imports: [CommonModule],
  exports: [GetScorePipe],
})
export class GetScorePipeModule {}

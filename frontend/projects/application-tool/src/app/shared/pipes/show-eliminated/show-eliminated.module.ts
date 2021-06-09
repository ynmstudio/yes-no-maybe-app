import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowEliminatedPipe } from './show-eliminated.pipe';

@NgModule({
  declarations: [ShowEliminatedPipe],
  exports: [ShowEliminatedPipe],
  imports: [CommonModule],
})
export class ShowEliminatedModule {}

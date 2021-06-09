import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastPipe } from './last.pipe';

@NgModule({
  declarations: [LastPipe],
  exports: [LastPipe],
  imports: [CommonModule],
})
export class LastPipeModule {}

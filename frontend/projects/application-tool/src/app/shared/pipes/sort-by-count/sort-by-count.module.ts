import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortByCountPipe } from './sort-by-count.pipe';

@NgModule({
  declarations: [SortByCountPipe],
  imports: [CommonModule],
  exports: [SortByCountPipe],
})
export class SortByCountModule {}

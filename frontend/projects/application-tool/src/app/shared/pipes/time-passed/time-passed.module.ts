import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePassedPipe } from './time-passed.pipe';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [TimePassedPipe],
  exports: [TimePassedPipe],
  imports: [CommonModule, TranslateModule],
})
export class TimePassedPipeModule {}

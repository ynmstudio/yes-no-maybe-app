import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizedDatePipe } from './localized-date.pipe';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LocalizedDatePipe],
  exports: [LocalizedDatePipe],
  imports: [CommonModule, TranslateModule],
})
export class LocalizedDateModule {}

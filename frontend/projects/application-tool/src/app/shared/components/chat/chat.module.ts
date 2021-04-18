import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { GetScorePipeModule } from '../../pipes/get-score/get-score.module';
import { LocalizedDateModule } from '../../pipes/localized-date/localized-date.module';

@NgModule({
  declarations: [ChatComponent],
  exports: [ChatComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    LocalizedDateModule,
    GetScorePipeModule,
  ],
})
export class ChatModule {}

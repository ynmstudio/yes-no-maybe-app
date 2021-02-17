import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChatComponent],
  exports: [ChatComponent],
  imports: [CommonModule, FormsModule, TranslateModule],
})
export class ChatModule {}

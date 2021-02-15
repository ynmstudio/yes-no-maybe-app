import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { TranslateModule } from '@ngx-translate/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [CommonModule, TranslateModule, PdfViewerModule],
  declarations: [ImageComponent],
  exports: [ImageComponent],
})
export class ImageModule {}

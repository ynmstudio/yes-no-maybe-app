import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { ImageModule } from '../image/image.module';
import { PdfModule } from '../pdf/pdf.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [GalleryComponent],
  exports: [GalleryComponent],
  imports: [CommonModule, TranslateModule, ImageModule, PdfModule],
})
export class GalleryModule {}

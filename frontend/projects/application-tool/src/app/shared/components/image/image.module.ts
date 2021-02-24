import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { TranslateModule } from '@ngx-translate/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    PdfViewerModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  declarations: [ImageComponent],
  exports: [ImageComponent],
})
export class ImageModule {}

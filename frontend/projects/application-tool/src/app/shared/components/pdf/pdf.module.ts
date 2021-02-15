import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfComponent } from './pdf.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [PdfComponent],
  imports: [CommonModule, PdfViewerModule],
})
export class PdfModule {}

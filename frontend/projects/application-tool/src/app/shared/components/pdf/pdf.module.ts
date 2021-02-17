import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfComponent } from './pdf.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PdfComponent],
  exports: [PdfComponent],
  imports: [CommonModule, PdfViewerModule, FormsModule],
})
export class PdfModule {}

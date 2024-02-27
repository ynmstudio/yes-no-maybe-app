import { Component, Input, OnInit } from '@angular/core';
import { PDFDocumentProxy, PdfViewerModule } from 'ng2-pdf-viewer';
import { StorageService } from '../../../services/src/storage.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-pdf',
  imports: [CommonModule, PdfViewerModule, FormsModule],
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss'],
})
export class PdfComponent implements OnInit {
  @Input() key!: string;
  @Input() mimetype!: string;

  downloadURL!: Promise<string>;

  pdf: any;
  outline: any[] = [];

  error: boolean = false;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.getDownloadUrl();
  }

  getDownloadUrl() {
    if (!this.key) return;

    this.downloadURL = this.storageService
      .getUrl(this.key, this.mimetype)
      .catch((_) => {
        this.error = true;
        return _;
      });
  }

  page = 1;

  /**
   * Get pdf information after it's loaded
   * @param pdf pdf document proxy
   */
  afterLoadComplete(pdf: PDFDocumentProxy) {
    this.pdf = pdf;

    this.loadOutline();
  }
  /**
   * Get outline
   */
  async loadOutline() {
    this.outline = await this.pdf.getOutline();
  }

  incrementPage(amount: number) {
    this.page =
      this.page + amount < 1
        ? 1
        : this.page + amount >= this.pdf.numPages
          ? this.pdf.numPages
          : this.page + amount;
  }
  zoom: number = 1;
  zoomIn() {
    if (this.zoom < 8) {
      this.zoom = this.zoom * 2;
    }
  }
  zoomOut() {
    if (this.zoom > 1) {
      this.zoom = this.zoom / 2;
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, retryWhen, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss'],
})
export class PdfComponent implements OnInit {
  @Input() key!: string;
  @Input() mimetype!: string;

  downloadURL!: Observable<string>;

  pdf: any;
  outline: any[] = [];

  error: boolean = false;

  constructor(private storage: AngularFireStorage) {}

  ngOnInit(): void {
    this.getDownloadUrl();
  }

  getDownloadUrl() {
    if (!this.key) return;

    this.downloadURL = this.storage.ref(this.key).getDownloadURL();
  }

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
}

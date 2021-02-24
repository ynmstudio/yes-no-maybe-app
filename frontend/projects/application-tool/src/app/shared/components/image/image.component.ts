import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() key!: string;
  @Input() mimetype!: string;
  @Input() size: string = '';
  @Input() showControls: boolean = false;

  video: boolean = false;
  pdf: boolean = false;

  downloadURL!: Promise<string>;

  error: boolean = false;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.getDownloadUrl();
  }

  getDownloadUrl() {
    if (!this.key) return;

    if (this.mimetype.startsWith('video/')) this.video = true;
    if (this.mimetype.startsWith('application/pdf')) this.pdf = true;

    this.downloadURL = this.storageService
      .getUrl(this.key, this.mimetype, this.size)
      .catch((_) => {
        this.error = true;
        return _;
      });
  }
}

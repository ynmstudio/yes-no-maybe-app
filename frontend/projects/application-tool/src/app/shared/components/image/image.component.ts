import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { VgApiService } from '@videogular/ngx-videogular/core';
import { EmbedService } from '../../services/embed.service';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit, OnChanges {
  @Input() key!: string;
  @Input() mimetype!: string;
  @Input() width!: number;
  @Input() height!: number;
  @Input() showControls: boolean = false;
  @Input() active: boolean = true;

  @ViewChild('iframe') iframe: any;

  type: string = 'image';

  downloadURL!: Promise<string>;
  // FOR VIDEO
  mp4DownloadURL!: Promise<string>;
  webmDownloadURL!: Promise<string>;
  thumbnailURL!: Promise<string>;
  thumbnailGifURL!: Promise<string>;

  videoApi!: VgApiService;

  error: boolean = false;

  constructor(
    private storageService: StorageService,
    private embedService: EmbedService
  ) {}

  ngOnInit(): void {
    this.getDownloadUrl();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.active && this.videoApi) {
      if (!changes.active.currentValue) this.videoApi.pause();
    }
  }

  async getDownloadUrl() {
    if (!this.key) return;

    if (this.mimetype.startsWith('video/')) this.type = 'video';
    if (this.mimetype.startsWith('audio/')) this.type = 'audio';
    if (this.mimetype.startsWith('text/html')) this.type = 'iframe';
    if (this.mimetype.startsWith('application/pdf')) this.type = 'pdf';

    if (this.type === 'iframe') {
      this.downloadURL = new Promise((r) =>
        r(
          this.embedService.embed(this.key, {
            query: {
              controls: this.showControls ? 1 : 0,
              title: 0,
              transparent: 1,
              byline: 0,
              background: 0,
              showinfo: 0,
              modestbranding: 1,
            },
            attr: { width: this.width, height: this.height },
          })
        )
      );
    } else if (this.type === 'video') {
      this.mp4DownloadURL = this.storageService
        .getUrl(this.key + '_converted.mp4', 'video/mp4')
        .catch((_) => _);
      this.webmDownloadURL = this.storageService
        .getUrl(this.key + '_converted.webm', 'video/webm')
        .catch((_) => _);
      this.thumbnailURL = this.storageService
        .getUrl(
          this.key,
          'image/jpg',
          this.width && this.height
            ? `_${this.width}x${this.height}.jpg`
            : '.jpg'
        )
        .catch((_) => _);
      this.thumbnailGifURL = this.storageService
        .getUrl(this.key + '_preview.gif', 'image/gif')
        .catch((_) => _);

      this.downloadURL = this.storageService
        .getUrl(this.key, this.mimetype)
        .catch((_) => {
          this.error = true;
          return _;
        });
    } else {
      this.downloadURL = this.storageService
        .getUrl(
          this.key,
          this.mimetype,
          this.width && this.height ? `_${this.width}x${this.height}` : ''
        )
        .catch((_) => {
          this.error = true;
          return _;
        });
    }
  }

  onPlayerReady(event: VgApiService) {
    this.videoApi = event;
  }
}

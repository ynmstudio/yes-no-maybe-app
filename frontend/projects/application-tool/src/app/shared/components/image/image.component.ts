import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { VgApiService } from '@videogular/ngx-videogular/core';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit, OnChanges {
  @Input() key!: string;
  @Input() mimetype!: string;
  @Input() size: string = '';
  @Input() showControls: boolean = false;
  @Input() active: boolean = false;

  type: string = 'image';

  downloadURL!: Promise<string>;

  videoApi!: VgApiService;

  error: boolean = false;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.getDownloadUrl();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.active && this.videoApi) {
      if (!changes.active.currentValue) this.videoApi.pause();
    }
  }

  getDownloadUrl() {
    if (!this.key) return;

    if (this.mimetype.startsWith('video/')) this.type = 'video';
    if (this.mimetype.startsWith('audio/')) this.type = 'audio';
    if (this.mimetype.startsWith('application/pdf')) this.type = 'pdf';

    this.downloadURL = this.storageService
      .getUrl(this.key, this.mimetype, this.size)
      .catch((_) => {
        this.error = true;
        return _;
      });
  }

  onPlayerReady(event: VgApiService) {
    this.videoApi = event;
  }
}

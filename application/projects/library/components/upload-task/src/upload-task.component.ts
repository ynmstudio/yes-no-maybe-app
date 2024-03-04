import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Storage, UploadTask, getDownloadURL, getMetadata, ref, uploadBytesResumable } from '@angular/fire/storage';
import { RemoteConfig, getBoolean, getString, getValue } from '@angular/fire/remote-config';

import { FileFragment, } from 'generated/types.graphql-gen';

import { Observable } from 'rxjs';

import { v4 as uuidv4 } from 'uuid';

@Component({
  standalone: true,
  selector: 'app-upload-task',
  imports: [CommonModule],
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss'],
})
export class UploadTaskComponent implements OnInit {
  @Input() file!: File;
  @Input() path_prefix: string = 'temp';

  @Input() public: boolean = false;
  @Input() pdf: boolean = false;

  @Output('uploaded')
  asset: EventEmitter<FileFragment | undefined> = new EventEmitter<
    FileFragment | undefined
  >();



  percentage: number | undefined;
  snapshot!: Observable<any>;
  downloadURL!: string;

  private auth = inject(Auth)
  private storage = inject(Storage);
  private remoteConfig = inject(RemoteConfig);

  task?: UploadTask;

  ngOnInit() {
    try {
      this.startUpload();
    } catch (error: any) {
      console.error(error);
    }
  }

  async startUpload() {
    if (!this.file) alert('Keine Datei gefunden');

    const allowVideo = getBoolean(this.remoteConfig, 'AllowVideo');
    const allowAudio = getBoolean(this.remoteConfig, 'AllowAudio');


    const allowedPDFPortfolioFormats = ["image", 'application/pdf'];
    const allowedPDFPortfolioFormatsMessage = "eine einzelne PDF Datei oder Screenshot";

    let allowedArtworkFormats = ["image", 'application/pdf'];
    let allowedArtworkFormatsMessage = "PDF-Dateien oder Bilder";
    if (allowVideo) {
      allowedArtworkFormats.push('video/mp4', 'video/quicktime');
      allowedArtworkFormatsMessage = "Videos (.mp4/.mov), " + allowedArtworkFormatsMessage;
    }
    if (allowAudio) {
      allowedArtworkFormats.push('audio');
      allowedArtworkFormatsMessage = "Audio (.mp3/.wav), " + allowedArtworkFormatsMessage;
    }

    const acceptedFileFormats = this.pdf ? allowedPDFPortfolioFormats : allowedArtworkFormats;

    if (!acceptedFileFormats.includes(this.file.type.split('/')[0]) && !acceptedFileFormats.includes(this.file.type)) {
      this.asset.next(undefined);
      alert(
        `Dieser Dateityp wird nicht unterstützt. Bitte nur ${this.pdf
          ? allowedPDFPortfolioFormatsMessage
          : allowedArtworkFormatsMessage
        } hochladen.`
      );
      return;
    }

    if (
      this.pdf
        ? this.file.type.split('/')[0] !== 'image' &&
        this.file.type !== 'application/pdf'
        : this.file.type.split('/')[0] !== 'image' &&
        this.file.type !== 'video/mp4' &&
        this.file.type !== 'video/quicktime' &&
        this.file.type.split('/')[0] !== 'audio'
    ) {

    }

    const user = this.auth.currentUser;

    const uuid = uuidv4();

    // The storage path
    const path =
      (this.public || !user?.uid ? 'public' : `users/${user?.uid}`) +
      `/${this.path_prefix}/${uuid}`;

    // Reference to storage bucket
    const storageRef = ref(this.storage, path);

    // The main task
    this.task = uploadBytesResumable(storageRef, this.file, {
      customMetadata: { originalname: this.file.name },
    });

    // Progress monitoring
    this.task.on(
      'state_changed',
      (snapshot) => {
        this.percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
      },
      (error) => console.error(error),
      async () => {

        this.downloadURL = await getDownloadURL(storageRef)

        const metaData = await getMetadata(storageRef);
        this.asset.next({
          id: metaData.name,
          key: path,
          mimetype: metaData.contentType || '',
          originalname: metaData.customMetadata ? metaData.customMetadata['originalname'] : this.file.name,
          size: metaData.size,
        });
      })
  }

  isActive(snapshot: any) {
    return (
      snapshot.state === 'running' &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }
  cancel() {
    this.task?.cancel();
    this.asset.next(undefined);
  }
}

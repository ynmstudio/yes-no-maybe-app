import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { FileFragment, GetEditionGQL } from 'generated/types.graphql-gen';

import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

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

  task!: AngularFireUploadTask;

  percentage!: Observable<number | undefined>;
  snapshot!: Observable<any>;
  downloadURL!: string;

  private auth = inject(Auth)

  constructor(
    private storage: AngularFireStorage,
  ) { }

  ngOnInit() {
    try {
      this.startUpload();
    } catch (error: any) {
      console.error(error);
    }
  }

  async startUpload() {
    if (!this.file) alert('Keine Datei gefunden');

    // Client-side validation example
    if (
      this.pdf
        ? this.file.type.split('/')[0] !== 'image' &&
        this.file.type !== 'application/pdf'
        : this.file.type.split('/')[0] !== 'image' &&
        this.file.type !== 'video/mp4' &&
        this.file.type !== 'video/quicktime' &&
        this.file.type.split('/')[0] !== 'audio'
    ) {
      this.asset.next(undefined);
      alert(
        `Dieser Dateityp wird nicht unterstützt. Bitte nur ${this.pdf
          ? 'eine einzelne PDF Datei oder Screenshot'
          : 'Videos (.mp4/.mov), Audio (.mp3/.wav) oder Bilder'
        } hochladen.`
      );
      return;
    }

    const user = this.auth.currentUser;

    const uuid = uuidv4();

    // The storage path
    const path =
      (this.public || !user?.uid ? 'public' : `users/${user?.uid}`) +
      `/${this.path_prefix}/${uuid}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file, {
      customMetadata: { originalname: this.file.name },
    });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      // The file's download URL
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL().toPromise();

        const metaData = await ref.getMetadata().toPromise();

        this.asset.next({
          id: metaData.name,
          key: path,
          mimetype: metaData.contentType,
          originalname: metaData.customMetadata.originalname,
          size: metaData.size,
        });
      })
    );
  }

  isActive(snapshot: any) {
    return (
      snapshot.state === 'running' &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }
  cancel() {
    this.task.cancel();
    this.asset.next(undefined);
  }
}

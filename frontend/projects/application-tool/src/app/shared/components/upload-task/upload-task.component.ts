import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { FileFragment, GetEditionGQL } from 'generated/types.graphql-gen';

import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss'],
})
export class UploadTaskComponent implements OnInit {
  @Input() file!: File;
  @Input() path_prefix: string = 'temp';

  @Input() public: boolean = false;
  @Input() pdf: boolean = false;

  @Output('uploaded')
  asset: EventEmitter<FileFragment> = new EventEmitter<FileFragment>();

  task!: AngularFireUploadTask;

  percentage!: Observable<number | undefined>;
  snapshot!: Observable<any>;
  downloadURL!: string;

  constructor(
    private storage: AngularFireStorage,
    private afAuth: AngularFireAuth,
    private getEditionGQL: GetEditionGQL
  ) {}

  ngOnInit() {
    try {
      this.startUpload();
    } catch (error) {
      console.error(error);
    }
  }

  async startUpload() {
    console.warn('startUpload()');

    if (!this.file) alert('Keine Datei gefunden');

    // Client-side validation example
    if (
      this.pdf
        ? this.file.type !== 'application/pdf'
        : this.file.type.split('/')[0] !== 'image' &&
          this.file.type !== 'video/mp4' &&
          this.file.type !== 'video/quicktime'
    ) {
      this.asset.next();
      alert(
        `Dieser Dateityp wird nicht unterstützt. Bitte nur ${
          this.pdf
            ? 'eine einzelne PDF Datei'
            : 'Videos (.mp4/.mov) oder Bilder'
        } hochladen.`
      );
      return;
    }

    const user = await this.afAuth.currentUser;
    const edition_id = (await this.getEditionGQL.fetch().toPromise()).data
      .editions[0].id;

    if (!edition_id) alert('No current edition');

    const uuid = uuidv4();

    console.warn(user);
    // The storage path
    const path =
      (this.public || !user?.uid
        ? 'public'
        : `editions/${edition_id}/users/${user?.uid}`) +
      `/${this.path_prefix}/${Date.now()}_${uuid}`;

    console.warn(path);

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file, {
      customMetadata: { originalname: this.file.name },
    });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL().toPromise();

        const metaData = await ref.getMetadata().toPromise();

        console.warn(metaData, { downloadURL: this.downloadURL, path });

        this.asset.next({
          key: path,
          mimetype: metaData.contentType,
          originalname: metaData.name,
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
    this.asset.next();
  }
}

import { Directive, Input, Output, EventEmitter } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { FileFragment } from 'generated/types.graphql-gen';

import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
@Directive({
  selector: '[appUploadTask]',
})
export class UploadTaskDirective {
  @Input() file!: File;

  @Output('uploaded')
  asset: EventEmitter<FileFragment> = new EventEmitter<FileFragment>();

  task!: AngularFireUploadTask;

  percentage!: Observable<number | undefined>;
  snapshot!: Observable<any>;
  downloadURL!: string;

  constructor(private storage: AngularFireStorage) {}

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {
    // The storage path
    const path = `test/${Date.now()}_${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL().toPromise();

        console.warn({ downloadURL: this.downloadURL, path });

        this.asset.next({ downloadURL: this.downloadURL, path });
      })
    );
  }

  isActive(snapshot: any) {
    return (
      snapshot.state === 'running' &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }
}

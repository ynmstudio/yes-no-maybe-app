import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, retryWhen, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() key!: string;
  @Input() mimetype!: string;
  @Input() size: string = '';

  video: boolean = false;
  pdf: boolean = false;

  requestKey: BehaviorSubject<string> = new BehaviorSubject(this.key);

  downloadURL!: Observable<string>;

  error: boolean = false;

  constructor(private storage: AngularFireStorage) {}

  ngOnInit(): void {
    this.getDownloadUrl();
  }

  getDownloadUrl() {
    if (!this.key) return;

    if (this.mimetype.startsWith('video/')) this.video = true;
    if (this.mimetype.startsWith('application/pdf')) this.pdf = true;

    this.requestKey.next(
      this.mimetype.startsWith('video/') ||
        this.mimetype.startsWith('application/pdf') ||
        this.mimetype === 'image/gif'
        ? this.key
        : this.key + this.size
    );

    let getOriginal = false;

    this.downloadURL = this.requestKey.asObservable().pipe(
      switchMap((key) => {
        return this.storage
          .ref(key)
          .getDownloadURL()
          .pipe(
            retryWhen((errors) => {
              let attempts = 0;
              return errors.pipe(
                mergeMap((error: any) => {
                  if (attempts++ < 3) {
                    return of(error).pipe(delay(500 * attempts));
                  } else if (!getOriginal) {
                    getOriginal = true;
                    this.requestKey.next(this.key);
                    return of(error);
                  } else {
                    this.error = true;
                    return throwError(error);
                  }
                })
              );
            })
          );
      })
    );
  }
}

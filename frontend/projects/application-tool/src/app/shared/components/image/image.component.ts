import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import {
  catchError,
  concatMap,
  delay,
  mergeMap,
  retryWhen,
  switchMap,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() key!: string;
  @Input() mimetype!: string;
  @Input() size: string = '';

  requestKey: BehaviorSubject<string> = new BehaviorSubject(this.key);

  downloadURL!: Observable<string>;

  error: boolean = false;

  constructor(private storage: AngularFireStorage) {}

  ngOnInit(): void {
    this.getDownloadUrl();
  }

  async getDownloadUrl() {
    if (!this.key) return;

    this.requestKey.next(
      this.mimetype === 'image/gif' ? this.key : this.key + this.size
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
                  if (attempts++ < 2) {
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

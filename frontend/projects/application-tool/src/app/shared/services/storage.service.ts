import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  savedDownloadUrls: Map<string, string | null> = new Map();

  constructor(private storage: AngularFireStorage) {}

  async getUrl(key: string, mimetype: string, size: string = '') {
    if (!key) return;

    const requestKey =
      mimetype.startsWith('video/') ||
      mimetype.startsWith('application/pdf') ||
      mimetype === 'image/gif'
        ? key
        : key + size;

    if (this.savedDownloadUrls.has(requestKey)) {
      return this.savedDownloadUrls.get(requestKey);
    }
    let downloadURL = await this.getDownloadURL(requestKey, key).toPromise();
    this.savedDownloadUrls.set(requestKey, downloadURL);
    return downloadURL;
  }

  public getMetadata(key: string) {
    return this.storage.ref(key).getMetadata();
  }

  private getDownloadURL(
    key: string,
    original_key?: string
  ): Observable<string | null> {
    return this.storage
      .ref(key)
      .getDownloadURL()
      .pipe(
        catchError((error) => {
          if (original_key) {
            return this.getDownloadURL(original_key);
          } else {
            console.error(error);
            return throwError(null);
          }
        })
      );
  }
}

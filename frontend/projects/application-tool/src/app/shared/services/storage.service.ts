import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { environment } from 'projects/application-tool/src/environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  savedDownloadUrls: Map<string, string | null> = new Map();

  constructor(private afStorage: AngularFireStorage) {
    if (!environment.production) {
      this.afStorage.storage.useEmulator('localhost', 9199);
      console.log('afStorage', this.afStorage.storage.app);
    }
  }

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
    if (downloadURL) this.savedDownloadUrls.set(requestKey, downloadURL);
    return downloadURL;
  }

  public getMetadata(key: string) {
    return this.afStorage.ref(key).getMetadata();
  }

  private getDownloadURL(
    key: string,
    original_key?: string
  ): Observable<string | null> {
    return this.afStorage
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

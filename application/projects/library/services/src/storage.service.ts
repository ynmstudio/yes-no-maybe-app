import { Injectable, inject } from '@angular/core';
import { getDownloadURL, ref, Storage } from '@angular/fire/storage';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  savedDownloadUrls: Map<string, string | null> = new Map();

  storage = inject(Storage);

  constructor() { }

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
    let downloadURL = await this.getDownloadURL(requestKey, key);
    if (downloadURL) this.savedDownloadUrls.set(requestKey, downloadURL);
    return downloadURL;
  }

  // public getMetadata(key: string) {
  //   return  this.afStorage.ref(key).getMetadata();
  // }

  private async getDownloadURL(
    key: string,
    original_key?: string
  ): Promise<string | null> {
    try {
      return await getDownloadURL(ref(this.storage, key));;
    } catch (error) {
      if (original_key) {
        return await this.getDownloadURL(original_key);
      } else {
        console.debug(error);
        throwError(() => null);
      }
    }
    return Promise.resolve(null);
  }
}

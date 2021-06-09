/**

This code originally from https://www.npmjs.com/package/ngx-embed-video.
The way it was packaged, however, caused run problems on production builds, possibly to do with not being compatible with Ivy
in the most recent versions of angular.
The code was cleaned up to work with stricter tslint settings, consistent identifier naming,
and to add alts to images for WCAG compliance.
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmbedService {
  private validYouTubeOptions = [
    'default',
    'mqdefault',
    'hqdefault',
    'sddefault',
    'maxresdefault',
  ];
  private validVimeoOptions = [
    'thumbnail_small',
    'thumbnail_medium',
    'thumbnail_large',
  ];
  private validDailyMotionOptions = [
    'thumbnail_60_url',
    'thumbnail_120_url',
    'thumbnail_180_url',
    'thumbnail_240_url',
    'thumbnail_360_url',
    'thumbnail_480_url',
    'thumbnail_720_url',
    'thumbnail_1080_url',
  ];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  public embed(url: any, options?: any): any {
    let id;
    url = new URL(url);
    id = this.detectYoutube(url);
    if (id) {
      return this.embedYouTube(id, options);
    }
    id = this.detectVimeo(url);
    if (id) {
      return this.embedVimeo(id, options);
    }
    id = this.detectDailymotion(url);
    if (id) {
      return this.embedDailyMotion(id, options);
    }
  }

  public embedYouTube(id: string, options?: any): string {
    options = this.parseOptions(options);

    return this.sanitizeIframe(
      '<iframe src="https://www.youtube.com/embed/' +
        id +
        options.query +
        '"' +
        options.attr +
        ' frameborder="0" allowfullscreen></iframe>'
    );
  }

  public embedVimeo(id: string, options?: any): string {
    options = this.parseOptions(options);
    return this.sanitizeIframe(
      '<iframe src="https://player.vimeo.com/video/' +
        id +
        options.query +
        '"' +
        options.attr +
        ' frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
    );
  }

  public embedDailyMotion(id: string, options?: any): string {
    options = this.parseOptions(options);
    return this.sanitizeIframe(
      '<iframe src="https://www.dailymotion.com/embed/video/' +
        id +
        options.query +
        '"' +
        options.attr +
        ' frameborder="0" allowfullscreen></iframe>'
    );
  }

  public embedImage(url: any, options?: any): any {
    let id;
    url = new URL(url);
    id = this.detectYoutube(url);
    if (id) {
      return this.embedYoutubeImage(id, options);
    }
    id = this.detectVimeo(url);
    if (id) {
      return this.embedVimeoImage(id, options);
    }
    id = this.detectDailymotion(url);
    if (id) {
      return this.embedDailymotionImage(id, options);
    }
  }

  private embedYoutubeImage(id: string, options?: any): any {
    if (typeof options === 'function') {
      options = {};
    }
    options = options || {};
    options.image =
      this.validYouTubeOptions.indexOf(options.image) > 0
        ? options.image
        : 'default';
    const src =
      'https://img.youtube.com/vi/' + id + '/' + options.image + '.jpg';
    const result = {
      link: src,
      html: '<img src="' + src + '" alt="Video cover image."/>',
    };
    return new Promise((resolve) => {
      resolve(result);
    });
  }

  private embedVimeoImage(id: string, options?: any): any {
    if (typeof options === 'function') {
      options = {};
    }

    options = options || {};

    options.image =
      this.validVimeoOptions.indexOf(options.image) >= 0
        ? options.image
        : 'thumbnail_large';

    return this.http
      .get('https://vimeo.com/api/v2/video/' + id + '.json')
      .pipe(
        map((res: any) => {
          return {
            link: res[0][options.image],
            html:
              '<img src="' +
              res[0][options.image] +
              '" alt="Video cover image."/>',
          };
        })
      )
      .toPromise()
      .catch((error) => console.error(error));
  }

  private embedDailymotionImage(id: string, options?: any): any {
    if (typeof options === 'function') {
      options = {};
    }

    options = options || {};

    options.image =
      this.validDailyMotionOptions.indexOf(options.image) >= 0
        ? options.image
        : 'thumbnail_480_url';

    return this.http
      .get(
        'https://api.dailymotion.com/video/' + id + '?fields=' + options.image
      )
      .pipe(
        map((res: any) => {
          return {
            link: res[options.image],
            html:
              '<img src="' +
              res[options.image] +
              '" alt="Video cover image."/>',
          };
        })
      )
      .toPromise()
      .catch((error) => console.error(error));
  }

  private parseOptions(options: any): any {
    let queryString = '';
    let attributes = '';

    if (options && options.hasOwnProperty('query')) {
      queryString = '?' + this.serializeQuery(options.query);
    }
    if (options && options.hasOwnProperty('attr')) {
      const temp: any[] = [];
      Object.keys(options.attr).forEach((key) => {
        temp.push(key + '="' + options.attr[key] + '"');
      });
      attributes = ' ' + temp.join(' ');
    }
    return {
      query: queryString,
      attr: attributes,
    };
  }

  private serializeQuery(query: any): any {
    const queryString: any = [];
    for (const p in query) {
      if (query.hasOwnProperty(p)) {
        queryString.push(
          encodeURIComponent(p) + '=' + encodeURIComponent(query[p])
        );
      }
    }
    return queryString.join('&');
  }

  private sanitizeIframe(iframe: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(iframe);
  }

  private detectVimeo(url: any): string {
    return url.hostname === 'vimeo.com' ? url.pathname.split('/')[1] : null;
  }

  private detectYoutube(url: any): string {
    if (url.hostname.indexOf('youtube.com') > -1) {
      return url.search.split('=')[1];
    }
    if (url.hostname === 'youtu.be') {
      return url.pathname.split('/')[1];
    }
    return '';
  }

  private detectDailymotion(url: any): string {
    if (url.hostname.indexOf('dailymotion.com') > -1) {
      return url.pathname.split('/')[2].split('_')[0];
    }
    if (url.hostname === 'dai.ly') {
      return url.pathname.split('/')[1];
    }
    return '';
  }
}

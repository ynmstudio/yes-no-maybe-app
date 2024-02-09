import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  standalone: true,
  name: 'localizedDate',
  pure: false,
})
export class LocalizedDatePipe implements PipeTransform {
  timezoneOffset = new Date().getTimezoneOffset();

  constructor(private translateService: TranslateService) { }

  transform(value: any, pattern: string = 'mediumDate'): any {
    const datePipe: DatePipe = new DatePipe(this.translateService.currentLang);
    return datePipe.transform(value, pattern);
  }
}

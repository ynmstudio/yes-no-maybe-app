import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'last',
})
export class LastPipe implements PipeTransform {
  transform(input: any): any {
    if (!Array.isArray(input)) {
      return input;
    }

    // Returns undefined if empty
    return input[input.length - 1];
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getExtension',
})
export class GetExtensionPipe implements PipeTransform {
  transform(name: string): string {
    const ext: string = name
      .substring(name.lastIndexOf('.') + 1, name.length)
      .toLowerCase();
    return ext || 'file';
  }
}

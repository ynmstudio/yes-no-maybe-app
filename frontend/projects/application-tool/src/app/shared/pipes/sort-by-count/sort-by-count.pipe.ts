import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByCount',
})
export class SortByCountPipe implements PipeTransform {
  transform(input: any[]): any[] {
    if (!Array.isArray(input)) {
      return input;
    }

    return input.sort(
      (a: any, b: any) =>
        (b.specifications_aggregate?.aggregate?.count ?? 9999) -
        (a.specifications_aggregate?.aggregate?.count ?? 9999)
    );
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideByStatus',
  pure: false,
})
export class HideByStatusPipe implements PipeTransform {
  transform(
    applications: Array<any>,
    showAll: boolean,
    state: string = 'pristine'
  ): Array<any> {
    if (!applications) return applications;
    return applications.filter((application) =>
      showAll ? true : !(application.state === state)
    );
  }
}

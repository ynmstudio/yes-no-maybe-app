import { Pipe, PipeTransform } from '@angular/core';
import {
  AdminApplicationFragment,
  ApplicationFragment,
} from 'generated/types.graphql-gen';

@Pipe({
  name: 'showEliminated',
  pure: false,
})
export class ShowEliminatedPipe implements PipeTransform {
  transform(applications: Array<any>, show: boolean): Array<any> {
    if (!applications) return applications;
    return applications.filter((application) =>
      show ? true : !application.elimination
    );
  }
}

import { Injectable } from '@angular/core';
import { GetUpdatesGQL, UpdateUsernameGQL } from 'generated/types.graphql-gen';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class HasuraService {
  constructor(
    private updateUsernameGQL: UpdateUsernameGQL,
    private getUpdatesGQL: GetUpdatesGQL
  ) {}

  updateUsername(name: string) {
    console.warn('Trying to update username');
    return this.updateUsernameGQL
      .mutate(
        { name },
        {
          context: {
            headers: {
              'x-hasura-default-role': 'user',
            },
          },
        }
      )
      .pipe(tap((res) => console.warn(res)))
      .toPromise();
  }

  getUpdates() {
    return this.getUpdatesGQL.subscribe({}, { fetchPolicy: 'network-only' });
  }
}

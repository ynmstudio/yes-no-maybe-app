import { Injectable } from '@angular/core';
import { UpdateUsernameGQL } from 'generated/types.graphql-gen';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class HasuraService {
  constructor(private updateUsernameGQL: UpdateUsernameGQL) {}

  updateUsername(name: string) {
    return this.updateUsernameGQL
      .mutate({ name })
      .pipe(tap((res) => console.warn(res)))
      .toPromise();
  }
}

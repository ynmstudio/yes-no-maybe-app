import { Injectable } from '@angular/core';
import {
  CreateEditionGQL,
  GetAllEditionsDocument,
  GetUpdatesGQL,
  UpdateEditionGQL,
  RenameEditionGQL,
  SetEditionStatusGQL,
  UpdateUsernameGQL,
} from 'generated/types.graphql-gen';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class HasuraService {
  constructor(
    private updateUsernameGQL: UpdateUsernameGQL,
    private getUpdatesGQL: GetUpdatesGQL,
    private createEditionGQL: CreateEditionGQL,
    private updateEditionGQL: UpdateEditionGQL,
    private renameEditionGQL: RenameEditionGQL,
    private setEditionStatusGQL: SetEditionStatusGQL
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

  /**
   * Edition
   */

  createEdition(name: string) {
    return this.createEditionGQL
      .mutate(
        { name },
        {
          update: (store, { data: { ...createdEdition } }) => {
            // Read the data from our cache for this query.
            const { ...data }: any = store.readQuery({
              query: GetAllEditionsDocument,
            });
            // Filter array by deleted producer id
            data.editions = [
              ...data.editions,
              createdEdition.insert_editions_one,
            ];
            // Write our data back to the cache.
            store.writeQuery({
              query: GetAllEditionsDocument,
              data,
            });
          },
        }
      )
      .toPromise();
  }
  renameEdition(id: number, name: string) {
    return this.renameEditionGQL.mutate({ id, name }).toPromise();
  }
  updateEdition(
    id: number,
    application_start: Date,
    application_end: Date,
    name: string
  ) {
    return this.updateEditionGQL
      .mutate({
        id,
        application_start,
        application_end,
        name,
      })
      .toPromise();
  }
  setEditionStatus(id: number, status: boolean) {
    return this.setEditionStatusGQL.mutate({ id, status }).toPromise();
  }
}

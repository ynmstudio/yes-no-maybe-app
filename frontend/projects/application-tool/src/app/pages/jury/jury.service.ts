import { Injectable } from '@angular/core';
import {
  EditionStateGQL,
  GetJuryApplicationGQL,
  GetJuryApplicationsGQL,
} from 'generated/types.graphql-gen';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JuryService {
  constructor(
    private editionStateGQL: EditionStateGQL,
    private getJuryApplicationsGQL: GetJuryApplicationsGQL,
    private getJuryApplicationGQL: GetJuryApplicationGQL
  ) {}

  getEditionState(): Observable<string> {
    return this.editionStateGQL.subscribe().pipe(
      map((editionState) => {
        if (editionState.data?.editions.length) {
          return editionState.data?.editions[0].state || 'unknown';
        } else {
          return 'no-edition';
        }
      }),
      shareReplay({ refCount: true })
    );
  }

  getApplications() {
    return this.getJuryApplicationsGQL.subscribe().pipe(shareReplay());
  }
  getApplication(id: string) {
    return this.getJuryApplicationGQL
      .watch(
        {
          id,
        },
        { fetchPolicy: 'cache-and-network' }
      )
      .valueChanges.pipe(shareReplay({ refCount: true }));
  }
}

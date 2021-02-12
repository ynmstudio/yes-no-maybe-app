import { Injectable } from '@angular/core';
import {
  EditionFragment,
  GetAllEditionsGQL,
  GetEditionStatisticGQL,
} from 'generated/types.graphql-gen';
import { AsyncSubject, BehaviorSubject, EMPTY, of, ReplaySubject } from 'rxjs';
import { filter, first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  _selectedEdition: ReplaySubject<
    EditionFragment | undefined
  > = new ReplaySubject();

  constructor(
    private getAllEditionsGQL: GetAllEditionsGQL,
    private getEditionStatisticGQL: GetEditionStatisticGQL
  ) {
    this.currentEdition
      .pipe(first())
      .subscribe((edition) => this._selectedEdition.next(edition));
  }

  getAllEditions() {
    return this.getAllEditionsGQL.watch(
      {},
      { fetchPolicy: 'cache-and-network' }
    ).valueChanges;
  }
  getStatistic() {
    return this.selectedEdition.pipe(
      switchMap((edition) => {
        return this.getEditionStatisticGQL.watch(
          {
            id: edition?.id!,
          },
          { fetchPolicy: 'cache-and-network' }
        ).valueChanges;
      })
    );
  }

  get currentEdition() {
    return this.getAllEditions().pipe(
      map((editions) =>
        editions?.data?.editions.find((edition) => edition.current)
      )
    );
  }

  get selectedEdition() {
    return this._selectedEdition.asObservable();
  }

  async switchEdition(id: number) {
    const edition = await this.getAllEditions()
      .pipe(
        first(),
        map((editions) =>
          editions?.data?.editions.find((edition) => edition.id === id)
        )
      )
      .toPromise();

    if (edition) {
      this._selectedEdition.next(edition);
    }
  }
}

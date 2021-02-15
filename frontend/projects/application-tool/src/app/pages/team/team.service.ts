import { Injectable } from '@angular/core';
import {
  EditionFragment,
  GetAllEditionsGQL,
  GetEditionStatisticGQL,
  GetAdminApplicationsByEditionGQL,
  GetAdminApplicationGQL,
  CreateNewAliasGQL,
  GetWorksGQL,
} from 'generated/types.graphql-gen';
import { ReplaySubject } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  _selectedEdition: ReplaySubject<
    EditionFragment | undefined
  > = new ReplaySubject();

  constructor(
    private getAllEditionsGQL: GetAllEditionsGQL,
    private getEditionStatisticGQL: GetEditionStatisticGQL,
    private getAdminApplicationsByEditionGQL: GetAdminApplicationsByEditionGQL,
    private getAdminApplicationGQL: GetAdminApplicationGQL,
    private createNewAliasGQL: CreateNewAliasGQL,
    private getWorksGQL: GetWorksGQL
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
  getAdminApplicationsByEdition() {
    return this.selectedEdition.pipe(
      switchMap((edition) => {
        return this.getAdminApplicationsByEditionGQL.watch(
          {
            edition_id: edition?.id!,
          },
          { fetchPolicy: 'cache-and-network' }
        ).valueChanges;
      })
    );
  }
  getAdminApplication(id: string) {
    return this.getAdminApplicationGQL.watch(
      {
        id,
      },
      { fetchPolicy: 'cache-and-network' }
    ).valueChanges;
  }
  getWorks(application_id: string) {
    return this.getWorksGQL.watch(
      {
        application_id,
      },
      { fetchPolicy: 'cache-and-network' }
    ).valueChanges;
  }
  async createNewAlias(id: string) {
    return this.createNewAliasGQL.mutate({ id }).toPromise();
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

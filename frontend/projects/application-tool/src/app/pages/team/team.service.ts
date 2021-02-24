import { Injectable } from '@angular/core';
import {
  EditionFragment,
  GetAllEditionsGQL,
  GetEditionStatisticGQL,
  GetAdminApplicationsByEditionGQL,
  GetAdminApplicationGQL,
  CreateNewAliasGQL,
  GetWorksGQL,
  SearchApplicationsGQL,
  EliminateApplicationGQL,
  GetAdminApplicationLiveGQL,
  GetEditionStateAdminGQL,
  GetCurrentRoundGQL,
} from 'generated/types.graphql-gen';
import { of, ReplaySubject } from 'rxjs';
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
    private getEditionStateAdminGQL: GetEditionStateAdminGQL,
    private getEditionStatisticGQL: GetEditionStatisticGQL,
    private getAdminApplicationsByEditionGQL: GetAdminApplicationsByEditionGQL,
    private getAdminApplicationGQL: GetAdminApplicationGQL,
    private getAdminApplicationLiveGQL: GetAdminApplicationLiveGQL,
    private createNewAliasGQL: CreateNewAliasGQL,
    private getWorksGQL: GetWorksGQL,
    private searchApplicationsGQL: SearchApplicationsGQL,
    private eliminateApplicationGQL: EliminateApplicationGQL,
    private getCurrentRoundGQL: GetCurrentRoundGQL
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
          { fetchPolicy: 'cache-and-network', pollInterval: 60000 }
        ).valueChanges;
      })
    );
  }
  getState() {
    return this.selectedEdition.pipe(
      switchMap((edition) => {
        const id = edition?.id;
        if (id) {
          return this.getEditionStateAdminGQL.subscribe({ id });
        } else {
          return of(null);
        }
      }),
      map((state) => state?.data?.editions_by_pk?.state || 'unknown')
    );
  }
  getCurrentRoundId() {
    return this.getCurrentRoundGQL.subscribe().pipe(
      map((roundObject) => {
        const length = roundObject.data?.rating_rounds?.length || 0;
        if (length > 0) {
          const currentRound = roundObject.data?.rating_rounds[length - 1];
          return currentRound?.id;
        } else {
          return undefined;
        }
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
  getAdminApplicationLive(id: string) {
    return this.getAdminApplicationLiveGQL.subscribe({ id });
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
  searchApplications(search: string) {
    return this.selectedEdition.pipe(
      switchMap((edition) => {
        return this.searchApplicationsGQL.watch(
          {
            search,
            edition_id: edition?.id!,
          },
          { fetchPolicy: 'cache-and-network' }
        ).valueChanges;
      })
    );
  }
  async eliminateApplication(
    application_id: string,
    reason: string,
    round_id?: number
  ) {
    await this.eliminateApplicationGQL
      .mutate({
        application_id,
        reason,
        round_id,
      })
      .toPromise();
  }
}

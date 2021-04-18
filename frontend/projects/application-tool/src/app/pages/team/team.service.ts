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
import { combineLatest, of, ReplaySubject } from 'rxjs';
import {
  first,
  map,
  switchMap,
  takeWhile,
  tap,
  withLatestFrom,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private _selectedEditionId: ReplaySubject<number> = new ReplaySubject();

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
    this.setInitialSelectedEdition();
  }
  setInitialSelectedEdition() {
    this.getAllEditions()
      .pipe(
        tap((editions) => {
          console.log('HUI');
          if (editions?.data?.editions.length > 0) {
            const currentEdition = editions?.data?.editions.find(
              (edition) => edition.current
            );
            if (currentEdition) {
              this._selectedEditionId.next(currentEdition.id);
            } else {
              this._selectedEditionId.next(
                editions?.data?.editions[editions?.data?.editions.length - 1].id
              );
            }
          }
        }),
        takeWhile((editions) => editions?.data?.editions.length < 1)
      )
      .subscribe();
  }

  getAllEditions() {
    return this.getAllEditionsGQL.watch({}, { fetchPolicy: 'network-only' })
      .valueChanges;
  }
  getStatistic() {
    return this.selectedEditionId.pipe(
      switchMap((id) => {
        return this.getEditionStatisticGQL.watch(
          {
            id,
          },
          { fetchPolicy: 'cache-and-network', pollInterval: 60000 }
        ).valueChanges;
      })
    );
  }
  getState() {
    return this.selectedEditionId.pipe(
      switchMap((id) => {
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
    return this.selectedEditionId.pipe(
      switchMap((edition_id) => {
        return this.getAdminApplicationsByEditionGQL.watch(
          {
            edition_id,
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

  get selectedEditionId() {
    return this._selectedEditionId.asObservable();
  }

  get selectedEdition() {
    return combineLatest([this.getAllEditions(), this.selectedEditionId]).pipe(
      switchMap(([editions, edition_id]) => {
        console.log(editions, edition_id);
        return of(
          editions.data.editions.find((edition) => edition.id === edition_id)
        );
      })
    );
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
    console.log(edition);
    if (edition) {
      this._selectedEditionId.next(edition.id);
    }
  }
  searchApplications(search: string) {
    return this.selectedEditionId.pipe(
      switchMap((edition_id) => {
        return this.searchApplicationsGQL.watch(
          {
            search,
            edition_id,
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

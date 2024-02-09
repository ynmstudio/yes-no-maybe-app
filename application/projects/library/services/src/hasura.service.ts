import { Injectable } from '@angular/core';
import {
  CreateEditionGQL,
  GetAllEditionsDocument,
  GetUpdatesGQL,
  UpdateEditionGQL,
  RenameEditionGQL,
  SetEditionStatusGQL,
  UpdateUsernameGQL,
  CreateRoundGQL,
  GetAllRoundsDocument,
  UpdateRoundGQL,
  RoundFragmentDoc,
  RoundSortedFragmentDoc,
  GetApplicationsToEliminateGQL,
  CloseRoundGQL,
  GetAllRoundsGQL,
  GetCurrentRoundGQL,
  GetRoundStatisticGQL,
  RoundFragment,
} from 'generated/types.graphql-gen';
import { firstValueFrom, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ModalService } from '../../components/modal/src/modal.service';
import { CloseRoundComponent as CloseRoundComponentType } from '../../components/modal/src/modals/close-round/close-round.component';
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
    private setEditionStatusGQL: SetEditionStatusGQL,
    private createRoundGQL: CreateRoundGQL,
    private updateRoundGQL: UpdateRoundGQL,
    private getApplicationsToEliminateGQL: GetApplicationsToEliminateGQL,
    private closeRoundGQL: CloseRoundGQL,
    private showCloseRoundModalService: ModalService<CloseRoundComponentType>,
    private getAllRoundsGQL: GetAllRoundsGQL,
    private getCurrentRoundGQL: GetCurrentRoundGQL,
    private getRoundStatisticGQL: GetRoundStatisticGQL
  ) { }

  updateUsername(name: string) {
    return firstValueFrom(this.updateUsernameGQL.mutate({ name }));
  }

  getUpdates() {
    return this.getUpdatesGQL.subscribe({}, { fetchPolicy: 'network-only' });
  }

  /**
   * Edition
   */

  createEdition(name: string) {
    return firstValueFrom(
      this.createEditionGQL.mutate(
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
    );
  }
  renameEdition(id: number, name: string) {
    return firstValueFrom(this.renameEditionGQL.mutate({ id, name }));
  }
  updateEdition(
    id: number,
    application_start: Date,
    application_end: Date,
    name: string
  ) {
    return this.updateEditionGQL.mutate({
      id,
      application_start,
      application_end,
      name,
    });
  }
  setEditionStatus(id: number, status: boolean) {
    return firstValueFrom(this.setEditionStatusGQL.mutate({ id, status }));
  }

  /**
   * Rounds
   */

  createRound(
    edition_id: number,
    end_at: Date,
    goal: number,
    prev_round_id: number
  ) {
    return this.createRoundGQL.mutate(
      {
        edition_id,
        end_at,
        goal,
        prev_round_id,
      },
      {
        update: (store, { data: { ...createdRound } }) => {
          // Read the data from our cache for this query.
          const { ...data }: any = store.readQuery({
            query: GetAllRoundsDocument,
          });
          // Filter array by deleted producer id
          data.rating_rounds_sorted = [
            ...data.rating_rounds_sorted,
            createdRound.insert_rating_rounds_one,
          ];
          // Write our data back to the cache.
          store.writeQuery({
            query: GetAllRoundsDocument,
            data,
          });
        },
      }
    );
  }
  updateRound(round_id: number, end_at: Date, goal: number) {
    return this.updateRoundGQL.mutate(
      {
        round_id,
        end_at,
        goal,
      },
      {
        update: (store, { data: { ...updatedRound } }) => {
          // Read the data from our cache for this query.
          let { ...data }: any = store.readFragment({
            id: `rating_rounds:${updatedRound.update_rating_rounds_by_pk?.id}`,
            fragment: RoundFragmentDoc,
            fragmentName: 'Round',
          });
          // Filter array by deleted producer id
          data = {
            ...data,
            ...updatedRound.update_rating_rounds_by_pk,
          };
          // Write our data back to the cache.
          store.writeFragment({
            id: `rating_rounds:${updatedRound.update_rating_rounds_by_pk?.id}`,
            fragment: RoundFragmentDoc,
            fragmentName: 'Round',
            data,
          });
          let { ...dataSorted }: any = store.readFragment({
            id: `rating_rounds_sorted:${updatedRound.update_rating_rounds_by_pk?.id}`,
            fragment: RoundSortedFragmentDoc,
            fragmentName: 'RoundSorted',
          });
          // Filter array by deleted producer id
          dataSorted = {
            ...dataSorted,
            ...updatedRound.update_rating_rounds_by_pk,
          };
          // Write our data back to the cache.
          store.writeFragment({
            id: `rating_rounds_sorted:${updatedRound.update_rating_rounds_by_pk?.id}`,
            fragment: RoundSortedFragmentDoc,
            fragmentName: 'RoundSorted',
            data: dataSorted,
          });
        },
      }
    );
  }
  async showCloseRoundModal(round_id: number, level: number = 0) {
    const applications = await firstValueFrom(
      this.getApplicationsToEliminateGQL.fetch({ round_id })
    );

    const { CloseRoundComponent } = await import(
      '../../components/modal/src/modals/close-round/close-round.component'
    );
    return this.showCloseRoundModalService.open(CloseRoundComponent, {
      round_id,
      applications: applications?.data.applications,
      level,
    });
  }

  getAllRounds() {
    return this.getAllRoundsGQL.watch({}, { fetchPolicy: 'cache-and-network' })
      .valueChanges;
  }
  getCurrentRound(): Observable<RoundFragment | undefined> {
    return this.getCurrentRoundGQL.subscribe().pipe(
      map((roundObject) => {
        const length = roundObject.data?.rating_rounds?.length || 0;
        return length > 0
          ? roundObject.data?.rating_rounds[length - 1]
          : undefined;
      })
    );
  }
  getCurrentRoundId() {
    return this.getCurrentRound().pipe(
      map((round) => (round ? round.id : undefined))
    );
  }
  getRoundStatistics() {
    return this.getCurrentRoundId().pipe(
      switchMap((id) => {
        return this.getRoundStatisticGQL.watch(
          {
            id: id || 0,
          },
          { fetchPolicy: 'cache-and-network', pollInterval: 10000 }
        ).valueChanges;
      })
    );
  }
}

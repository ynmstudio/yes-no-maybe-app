import { Injectable } from '@angular/core';
import {
  GetAllEditionsGQL,
  GetEditionStatisticGQL,
  GetAdminApplicationsByEditionGQL,
  GetAdminApplicationGQL,
  CreateNewAliasGQL,
  GetWorksGQL,
  SearchApplicationsGQL,
  EliminateApplicationGQL,
  DeleteEliminationGQL,
  GetAdminApplicationLiveGQL,
  GetEditionStateAdminGQL,
  AdminApplicationFragmentDoc,
  SetEditionWinnerGQL,
  GetUpdatesByEditionGQL,
  AddUpdateGQL,
  EditUpdateGQL,
  DeleteUpdateGQL,
  Updates_Insert_Input,
  Updates_Set_Input,
} from 'generated/types.graphql-gen';
import { combineLatest, EMPTY, of, ReplaySubject } from 'rxjs';
import {
  first,
  map,
  switchMap,
  takeWhile,
  tap,
  shareReplay,
} from 'rxjs/operators';
import { ModalService } from '../../shared/components/modal/modal.service';
import { DeleteUpdateComponent as DeleteUpdateComponentType } from '../../shared/components/modal/modals/delete-update/delete-update.component';
import { EditUpdateComponent as EditUpdateComponentType } from '../../shared/components/modal/modals/edit-update/edit-update.component';
import { NewUpdateComponent as NewUpdateComponentType } from '../../shared/components/modal/modals/new-update/new-update.component';
import { ConfirmWinnerComponent as ConfirmWinnerComponentType } from './../../shared/components/modal/modals/confirm-winner/confirm-winner.component';

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
    private deleteEliminationGQL: DeleteEliminationGQL,
    private setEditionWinnerGQL: SetEditionWinnerGQL,
    private showConfirmWinnerModalService: ModalService<ConfirmWinnerComponentType>,
    private showNewUpdateModalService: ModalService<NewUpdateComponentType>,
    private showEditUpdateModalService: ModalService<EditUpdateComponentType>,
    private showDeleteUpdateModalService: ModalService<DeleteUpdateComponentType>,
    private getUpdatesByEditionGQL: GetUpdatesByEditionGQL,
    private addUpdateGQL: AddUpdateGQL,
    private editUpdateGQL: EditUpdateGQL,
    private deleteUpdateGQL: DeleteUpdateGQL
  ) {
    this.setInitialSelectedEdition();
  }
  setInitialSelectedEdition() {
    this.getAllEditions()
      .pipe(
        tap((editions) => {
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
  getSelectedEditionUpdates() {
    return this.selectedEditionId.pipe(
      switchMap((id) => {
        return this.getUpdatesByEditionGQL.subscribe(
          {
            id,
          },
          { fetchPolicy: 'network-only' }
        );
      })
    );
  }
  getStatistic() {
    return this.selectedEditionId.pipe(
      switchMap((id) => {
        return this.getEditionStatisticGQL.watch(
          {
            id,
          },
          { fetchPolicy: 'cache-and-network', pollInterval: 10000 }
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

  getAdminApplicationsByEdition() {
    return this.selectedEditionId.pipe(
      switchMap((edition_id) => {
        return this.getAdminApplicationsByEditionGQL.watch(
          {
            edition_id,
          },
          { fetchPolicy: 'cache-and-network' }
        ).valueChanges;
      }),
      shareReplay()
    );
  }
  getAdminApplication(id: string) {
    return this.getAdminApplicationGQL
      .watch(
        {
          id,
        },
        { fetchPolicy: 'cache-and-network' }
      )
      .valueChanges.pipe(shareReplay({ refCount: true }));
  }
  getAdminApplicationLive(id: string) {
    return this.getAdminApplicationLiveGQL
      .watch({ id }, { fetchPolicy: 'network-only', pollInterval: 5000 })
      .valueChanges.pipe(shareReplay({ refCount: true }));
  }
  getWorks(application_id: string) {
    return this.getWorksGQL
      .watch(
        {
          application_id,
        },
        { fetchPolicy: 'cache-and-network' }
      )
      .valueChanges.pipe(shareReplay({ refCount: true }));
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
      switchMap(([editions, edition_id]) =>
        of(editions.data.editions.find((edition) => edition.id === edition_id))
      )
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
      .mutate(
        {
          application_id,
          reason,
          round_id,
        },
        {
          update: (store, { data: { ...elimination } }) => {
            // Read the data from our cache for this query.
            let { ...data }: any = store.readFragment({
              id: `applications:${elimination.insert_eliminations_one?.application_id}`,
              fragment: AdminApplicationFragmentDoc,
              fragmentName: 'AdminApplication',
            });
            // Filter array by deleted producer id
            data.elimination = {
              ...data.elimination,
              ...elimination.insert_eliminations_one,
            };
            // Write our data back to the cache.
            store.writeFragment({
              id: `applications:${elimination.insert_eliminations_one?.application_id}`,
              fragment: AdminApplicationFragmentDoc,
              fragmentName: 'AdminApplication',
              data,
            });
          },
        }
      )
      .toPromise();
  }
  async reviveApplication(application_id: string) {
    await this.deleteEliminationGQL
      .mutate(
        {
          application_id,
        },
        {
          update: (store, { data: { ...deletedElimination } }) => {
            // Read the data from our cache for this query.
            let { ...data }: any = store.readFragment({
              id: `applications:${deletedElimination.delete_eliminations_by_pk?.application_id}`,
              fragment: AdminApplicationFragmentDoc,
              fragmentName: 'AdminApplication',
            });
            // Filter array by deleted producer id
            data.elimination = null;
            // Write our data back to the cache.
            store.writeFragment({
              id: `applications:${deletedElimination.delete_eliminations_by_pk?.application_id}`,
              fragment: AdminApplicationFragmentDoc,
              fragmentName: 'AdminApplication',
              data,
            });
          },
        }
      )
      .toPromise();
  }

  /**
   * Winner
   */

  async showConfirmWinnerModal() {
    const { ConfirmWinnerComponent } = await import(
      './../../shared/components/modal/modals/confirm-winner/confirm-winner.component'
    );
    return this.showConfirmWinnerModalService.open(ConfirmWinnerComponent, {});
  }

  async setEditionWinner(application_id?: string) {
    return this.setEditionWinnerGQL
      .mutate({
        application_id,
      })
      .toPromise();
  }

  /**
   * Updates
   */

  async showNewUpdateModal(edition_id: number) {
    const { NewUpdateComponent } = await import(
      '../../shared/components/modal/modals/new-update/new-update.component'
    );
    return this.showNewUpdateModalService.open(NewUpdateComponent, {
      edition_id,
    });
  }
  async showEditUpdateModal(update: any) {
    const { EditUpdateComponent } = await import(
      '../../shared/components/modal/modals/edit-update/edit-update.component'
    );
    return this.showEditUpdateModalService.open(EditUpdateComponent, {
      ...update,
    });
  }
  async showDeleteUpdateModal(id: number) {
    const { DeleteUpdateComponent } = await import(
      '../../shared/components/modal/modals/delete-update/delete-update.component'
    );
    return this.showDeleteUpdateModalService.open(DeleteUpdateComponent, {
      id,
    });
  }

  addUpdate(object?: Updates_Insert_Input) {
    return this.addUpdateGQL.mutate({ object }).toPromise();
  }
  editUpdate(id: number, _set: Updates_Set_Input) {
    return this.editUpdateGQL.mutate({ id, _set }).toPromise();
  }
  deleteUpdate(id: number) {
    return this.deleteUpdateGQL.mutate({ id }).toPromise();
  }
}

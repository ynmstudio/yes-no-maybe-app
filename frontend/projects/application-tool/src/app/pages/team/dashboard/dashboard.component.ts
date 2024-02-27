import { Component, OnInit } from '@angular/core';
import {
  GetJuryStatisticGQL,
  GetJuryStatisticSubscription,
  RoundFragment,
} from 'generated/types.graphql-gen';
import { ModalService } from '../../../shared/components/modal/modal.service';

import { TeamService } from '../team.service';
import { NewRoundComponent as NewRoundComponentType } from './../../../shared/components/modal/modals/new-round/new-round.component';
import { EditRoundComponent as EditRoundComponentType } from './../../../shared/components/modal/modals/edit-round/edit-round.component';
import { HasuraService } from '../../../shared/services/hasura.service';
import { FirebaseService } from '../../../shared/services/firebase.service';
import { first, switchMap, withLatestFrom } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SubscriptionResult } from 'apollo-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-team-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  statistic$;
  roundStatistic$;
  state$;
  edition$;

  updates$;

  juryMembers$: Observable<SubscriptionResult<GetJuryStatisticSubscription>>;

  constructor(
    private hasuraService: HasuraService,
    private teamService: TeamService,
    private firebaseService: FirebaseService,
    private newRoundModalService: ModalService<NewRoundComponentType>,
    private editRoundModalService: ModalService<EditRoundComponentType>,
    private getJuryStatisticGQL: GetJuryStatisticGQL,
    public translateService: TranslateService
  ) {
    this.statistic$ = this.teamService.getStatistic();
    this.state$ = this.teamService.getState();
    this.edition$ = this.teamService.selectedEdition;

    this.roundStatistic$ = this.hasuraService.getRoundStatistics();

    this.updates$ = this.teamService.getSelectedEditionUpdates();

    this.juryMembers$ = this.firebaseService.getUsers('jury').pipe(
      withLatestFrom(this.roundStatistic$),
      switchMap(([users, statistics]) => {
        return this.getJuryStatisticGQL.subscribe({
          round_id: statistics.data.rating_rounds_by_pk?.id || 0,
          _in: [...users.map((user: any) => user.uid)],
        });
      })
    );
  }

  ngOnInit(): void { }

  async showNewRoundModal(edition_id: number, prev_round_id?: number | null) {
    const { NewRoundComponent } = await import(
      './../../../shared/components/modal/modals/new-round/new-round.component'
    );
    return this.newRoundModalService.open(NewRoundComponent, {
      edition_id,
      prev_round_id,
    });
  }

  async showEditRoundModal(rating_round?: RoundFragment | null) {
    if (!rating_round) return;
    const { EditRoundComponent } = await import(
      './../../../shared/components/modal/modals/edit-round/edit-round.component'
    );
    return this.editRoundModalService.open(EditRoundComponent, {
      round_id: rating_round.id,
      end_at: rating_round.end_at,
      goal: rating_round.goal,
    });
  }
  showCloseRoundModal(rating_round?: RoundFragment | null) {
    if (!rating_round) return;

    this.hasuraService.showCloseRoundModal(
      rating_round?.id,
      rating_round?.level || 0
    );
  }
  showConfirmWinnerModal() {
    this.teamService.showConfirmWinnerModal();
  }
  async showNewUpdateModal() {
    const edition = await this.edition$.pipe(first()).toPromise();
    if (!edition) return;
    this.teamService.showNewUpdateModal(edition?.id);
  }
  async showEditUpdateModal(update: any) {
    this.teamService.showEditUpdateModal(update);
  }
  async showDeleteUpdateModal(id: number) {
    this.teamService.showDeleteUpdateModal(id);
  }
}

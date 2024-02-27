import { Component, OnInit } from '@angular/core';
import {
  GetJuryStatisticGQL,
  GetJuryStatisticSubscription,
  RoundFragment,
} from 'generated/types.graphql-gen';
import { first, switchMap, withLatestFrom } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { SubscriptionResult } from 'apollo-angular';
import { TranslateService } from '@ngx-translate/core';
import { type EditRoundComponent as EditRoundComponentType, ModalService, type NewRoundComponent as NewRoundComponentType } from '@library/components/modal';
import { HasuraService, FirebaseService } from '@library/services';
import { TeamService } from '@library/services/team';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  standalone: true,
  selector: 'app-team-dashboard',
  imports: [SharedModule, RouterModule],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('500ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
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

    this.juryMembers$ = this.roundStatistic$.pipe(
      withLatestFrom(from(this.firebaseService.getUsers('jury'))),
      switchMap(([statistics, users]) => {
        return this.getJuryStatisticGQL.subscribe({
          round_id: statistics.data.rating_rounds_by_pk?.id || 0,
          _in: [...users.data.map((user: any) => user.uid)],
        });
      })
    );
  }

  ngOnInit(): void { }

  async showNewRoundModal(edition_id: number, prev_round_id?: number | null) {
    const { NewRoundComponent } = await import(
      '@library/components/modal'
    );
    return this.newRoundModalService.open(NewRoundComponent, {
      edition_id,
      prev_round_id,
    });
  }

  async showEditRoundModal(rating_round?: RoundFragment | null) {
    if (!rating_round) return;
    const { EditRoundComponent } = await import(
      '@library/components/modal'
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

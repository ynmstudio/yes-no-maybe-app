import { Component, OnInit } from '@angular/core';
import { from, Observable, switchMap, withLatestFrom } from 'rxjs';
import { AuthService } from '../../../shared/services/auth.service';
import { HasuraService } from '../../../shared/services/hasura.service';
import { JuryService } from '../jury.service';
import {
  GetJuryStatisticGQL,
  GetJuryStatisticSubscription,
} from 'generated/types.graphql-gen';
import { SubscriptionResult } from 'apollo-angular';

@Component({
  selector: 'app-jury-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user$;
  state$;
  currentRound$;
  roundStatistic$;

  applications$;

  juryMembers$?: Observable<SubscriptionResult<GetJuryStatisticSubscription>>;

  constructor(
    private authService: AuthService,
    private hasuraService: HasuraService,
    private juryService: JuryService,
    private getJuryStatisticGQL: GetJuryStatisticGQL
  ) {
    this.user$ = this.authService.authState;
    this.currentRound$ = this.hasuraService.getCurrentRound();
    this.roundStatistic$ = this.hasuraService.getRoundStatistics();

    this.state$ = this.juryService.getEditionState();
    this.applications$ = this.juryService.getApplications();

    this.authService.currentUser.then((user) => {
      this.juryMembers$ = this.roundStatistic$.pipe(
        switchMap((roundStatistic) => {
          console.log(user?.uid);
          return this.getJuryStatisticGQL.subscribe({
            round_id: roundStatistic.data.rating_rounds_by_pk?.id || 0,
            _in: [user?.uid || ''],
          });
        })
      );
    });
  }

  showIntroduction: boolean = false;
  toggleIntroduction() {
    this.showIntroduction = !this.showIntroduction;
  }

  ratings: boolean = true;
  toggleRatings() {
    this.ratings = !this.ratings;
  }
  ratingCount: boolean = true;
  toggleRatingCount() {
    this.ratingCount = !this.ratingCount;
  }
  previews: boolean = false;
  togglePreviews() {
    this.previews = !this.previews;
  }
  visiblePreview: string = '';
  showPreview(application_id: string) {
    this.visiblePreview = application_id;
  }

  visibleChat: string = '';

  toggleChat(application_id: string, event: Event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (this.visibleChat === application_id) {
      this.visibleChat = '';
    } else {
      this.visibleChat = application_id;
    }
  }

  ngOnInit(): void {}
}

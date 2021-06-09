import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ApplicationFragment,
  CloseRoundGQL,
  DeleteApplicationGQL,
  Eliminations_Insert_Input,
  GetApplicationsDocument,
  RoundFragmentDoc,
  RoundSortedFragmentDoc,
} from 'generated/types.graphql-gen';
import { AlertService } from '../../../alert/alert.service';
import { ModalComponent } from '../../modal.component';

@Component({
  selector: 'app-close-round',
  templateUrl: './close-round.component.html',
  styleUrls: ['./close-round.component.scss'],
})
export class CloseRoundComponent implements OnInit {
  data!: {
    round_id: number;
    applications: Array<any>;
    level: number;
  };

  @ViewChild('modalComponent') modal:
    | ModalComponent<CloseRoundComponent>
    | undefined;

  constructor(
    private alertService: AlertService,
    private closeRoundGQL: CloseRoundGQL
  ) {}

  ngOnInit(): void {}

  async confirmClosing() {
    if (
      !this.data ||
      !this.data.round_id ||
      this.data.applications === null ||
      this.data.level === null
    ) {
      this.alertService.error('Missing arguments!');
      return;
    }
    const objects: Array<Eliminations_Insert_Input> = this.data.applications.map(
      (application) => {
        return {
          round_id: this.data.round_id,
          application_id: application.id,
          reason: `Round ${this.data.level + 1}`,
        };
      }
    );
    await this.closeRoundGQL
      .mutate(
        {
          round_id: this.data.round_id,
          objects,
        },
        {
          update: (store, { data: { ...closedRound } }) => {
            // Read the data from our cache for this query.
            let { ...data }: any = store.readFragment({
              id: `rating_rounds:${closedRound.update_rating_rounds_by_pk?.id}`,
              fragment: RoundFragmentDoc,
              fragmentName: 'Round',
            });
            // Filter array by deleted producer id
            data = {
              ...data,
              ...closedRound.update_rating_rounds_by_pk,
            };
            // Write our data back to the cache.
            store.writeFragment({
              id: `rating_rounds:${closedRound.update_rating_rounds_by_pk?.id}`,
              fragment: RoundFragmentDoc,
              fragmentName: 'Round',
              data,
            });
            let { ...dataSorted }: any = store.readFragment({
              id: `rating_rounds_sorted:${closedRound.update_rating_rounds_by_pk?.id}`,
              fragment: RoundSortedFragmentDoc,
              fragmentName: 'RoundSorted',
            });
            // Filter array by deleted producer id
            dataSorted = {
              ...dataSorted,
              ...closedRound.update_rating_rounds_by_pk,
            };
            // Write our data back to the cache.
            store.writeFragment({
              id: `rating_rounds_sorted:${closedRound.update_rating_rounds_by_pk?.id}`,
              fragment: RoundSortedFragmentDoc,
              fragmentName: 'RoundSorted',
              data: dataSorted,
            });
          },
        }
      )
      .toPromise();
    this.close();
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}

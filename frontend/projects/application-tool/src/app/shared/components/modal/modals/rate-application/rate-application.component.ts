import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AddRatingGQL, Exact } from 'generated/types.graphql-gen';
import {
  HierarchicalScoring,
  Scoring,
} from 'projects/application-tool/src/app/config/scoring.model';
import { ModalComponent } from '../../modal.component';
@Component({
  selector: 'app-rate-application',
  templateUrl: './rate-application.component.html',
  styleUrls: ['./rate-application.component.scss'],
})
export class RateApplicationComponent implements OnInit {
  data!: Exact<{
    application_id: any;
    round_id: number;
  }>;

  @ViewChild('modalComponent') modal:
    | ModalComponent<RateApplicationComponent>
    | undefined;

  scoring: Scoring = HierarchicalScoring;

  value: number = -1;
  reason: string = '';

  constructor(private addRatingGQL: AddRatingGQL) {}

  ngOnInit(): void {}

  selectRating(value: number) {
    this.value = value;
  }

  async addRating() {
    if (!this.data) return;
    await this.addRatingGQL
      .mutate({
        application_id: this.data.application_id,
        round_id: this.data.round_id,
        reason: this.reason,
        value: this.value,
      })
      .toPromise();
    this.close();
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}

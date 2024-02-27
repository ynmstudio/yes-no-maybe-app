import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { AddRatingGQL, Exact } from 'generated/types.graphql-gen';
import { ModalComponent } from '../../modal.component';
import { SCORING_MODEL } from '@library/config';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-rate-application',
  imports: [CommonModule, FormsModule, TranslateModule, ModalComponent],
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

  scoring = inject(SCORING_MODEL);

  value: number = -1;
  reason: string = '';

  constructor(private addRatingGQL: AddRatingGQL) { }

  ngOnInit(): void { }

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

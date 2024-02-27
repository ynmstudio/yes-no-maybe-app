import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,

  ReactiveFormsModule,

  Validators,
} from '@angular/forms';
import { HasuraService } from '@library/services';
import { ModalComponent } from '@library/components/modal';
import { AlertService } from '@library/components/alert';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-new-round',
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, ModalComponent],
  templateUrl: './new-round.component.html',
  styleUrls: ['./new-round.component.scss'],
})
export class NewRoundComponent implements OnInit {
  data!: {
    edition_id: number;
    prev_round_id: number;
  };

  form: FormGroup;

  dateNow = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  );
  dateTomorrow = new Date(
    new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).getTime() -
    new Date().getTimezoneOffset() * 60000
  );

  edition_id = new FormControl(0, Validators.required);
  prev_round_id = new FormControl<number | null>(null);

  end_at = new FormControl(
    this.dateTomorrow.toISOString().substring(0, 16),
    Validators.required
  );
  goal = new FormControl(1, Validators.min(1));

  @ViewChild('modalComponent') modal:
    | ModalComponent<NewRoundComponent>
    | undefined;

  constructor(
    private fb: FormBuilder,
    private hasuraService: HasuraService,
    private alertService: AlertService
  ) {
    this.form = this.fb.group({
      edition_id: this.edition_id,
      end_at: this.end_at,
      goal: this.goal,
      prev_round_id: this.prev_round_id,
    });
  }

  ngOnInit(): void {
    this.edition_id.setValue(this.data.edition_id);
    this.prev_round_id.setValue(this.data.prev_round_id);
  }

  async createNewRound() {
    if (this.form.invalid) return;


    if (!this.edition_id.value || !this.end_at.value || !this.goal.value) {
      console.error('Invalid form data');
      return;
    }

    try {
      await this.hasuraService
        .createRound(
          this.edition_id.value,
          new Date(this.end_at.value),
          this.goal.value,
          this.prev_round_id.value ?? undefined
        )
        .toPromise();
    } catch (error: any) {
      this.alertService.error(error);
    }
    this.close();


  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}

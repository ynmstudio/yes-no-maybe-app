import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { HasuraService } from '../../../../services/hasura.service';
import { AlertService } from '../../../alert/alert.service';
import { ModalComponent } from '../../modal.component';

@Component({
  selector: 'app-new-round',
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
  prev_round_id = new FormControl(null);

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

    try {
      await this.hasuraService
        .createRound(
          this.edition_id.value,
          new Date(this.end_at.value),
          this.goal.value,
          this.prev_round_id.value
        )
        .toPromise();
    } catch (error) {
      this.alertService.error(error);
    }
    this.close();
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AlertService } from '@library/components/alert';
import { HasuraService } from '@library/services';
import { TranslateModule } from '@ngx-translate/core';
import { ModalComponent } from '../../modal.component';


@Component({
  standalone: true,
  selector: 'app-edit-round',
  imports: [CommonModule, TranslateModule, ReactiveFormsModule, FormsModule, ModalComponent],
  templateUrl: './edit-round.component.html',
  styleUrls: ['./edit-round.component.scss'],
})
export class EditRoundComponent implements OnInit {
  data!: {
    round_id: number;
    end_at: string;
    goal: number;
  };

  form: FormGroup;

  round_id = new FormControl(0, Validators.required);
  end_at = new FormControl('', Validators.required);
  goal = new FormControl(1, Validators.min(1));

  dateNow = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  );
  dateTomorrow = new Date(
    new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).getTime() -
    new Date().getTimezoneOffset() * 60000
  );

  @ViewChild('modalComponent') modal:
    | ModalComponent<EditRoundComponent>
    | undefined;

  constructor(
    private fb: FormBuilder,
    private hasuraService: HasuraService,
    private alertService: AlertService
  ) {
    this.form = this.fb.group({
      round_id: this.round_id,
      end_at: this.end_at,
      goal: this.goal,
    });
  }

  ngOnInit(): void {
    this.round_id.setValue(this.data.round_id);

    this.end_at.setValue(
      new Date(
        new Date(this.data.end_at).getTime() -
        new Date(this.data.end_at).getTimezoneOffset() * 60000
      )
        .toISOString()
        .substring(0, 16)
    );
    this.goal.setValue(this.data.goal);
  }

  async updateRound() {
    if (this.form.invalid) return;

    if (!this.round_id.value || !this.end_at.value || !this.goal.value) {
      console.error('Invalid form data');
      return;
    }

    try {
      await this.hasuraService
        .updateRound(
          this.round_id.value,
          new Date(this.end_at.value),
          this.goal.value
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

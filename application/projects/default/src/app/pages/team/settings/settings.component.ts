import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  RoundFragment,
  RoundSortedFragment,
} from 'generated/types.graphql-gen';
import { firstValueFrom } from 'rxjs';
import { distinctUntilChanged, first } from 'rxjs/operators';
import { EditRoundComponent as EditRoundComponentType, ModalService } from '@library/components/modal';
import { NewRoundComponent as NewRoundComponentType } from '@library/components/modal';
import { SharedModule } from '../../../shared/shared.module';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FirebaseService, HasuraService } from '@library/services';
import { TeamService } from '@library/services/team';
import { AlertService } from '@library/components/alert';

@Component({
  standalone: true,
  selector: 'app-team-settings',
  imports: [SharedModule, ClipboardModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  editions$;
  currentEdition$;
  selectedEdition$;

  allRounds$;
  currentRound$;

  form: FormGroup;

  dateNow = new Date();

  name = new FormControl('', [Validators.required, Validators.minLength(2)]);
  application_start = new FormControl('', [Validators.required]);
  application_end = new FormControl('', [Validators.required]);

  constructor(
    private fb: FormBuilder,
    private hasuraService: HasuraService,
    private teamService: TeamService,
    private alertService: AlertService,
    private firebaseService: FirebaseService,
    private newRoundModalService: ModalService<NewRoundComponentType>,
    private editRoundModalService: ModalService<EditRoundComponentType>
  ) {
    this.editions$ = this.teamService.getAllEditions();
    this.currentEdition$ = this.teamService.currentEdition;
    this.selectedEdition$ = this.teamService.selectedEdition;

    this.allRounds$ = this.hasuraService.getAllRounds();
    this.currentRound$ = this.hasuraService.getCurrentRound();

    this.form = this.fb.group(
      {
        name: this.name,
        application_start: this.application_start,
        application_end: this.application_end,
      },
      { validators: mustStartBeforeEnd }
    );

    this.selectedEdition$.pipe(distinctUntilChanged()).subscribe((edition) => {
      this.form.markAsUntouched();
      this.setFormValues(edition);
    });
  }

  private setFormValues(edition: any) {
    this.name.setValue(edition?.name);
    this.application_start.setValue(
      new Date(
        new Date(edition?.application_start).getTime() -
        new Date(edition?.application_start).getTimezoneOffset() * 60000
      )
        .toISOString()
        .substring(0, 16)
    );
    this.application_end.setValue(
      new Date(
        new Date(edition?.application_end).getTime() -
        new Date(edition?.application_end).getTimezoneOffset() * 60000
      )
        .toISOString()
        .substring(0, 16)
    );
  }

  ngOnInit(): void { }

  async toggleEditionStatus(id: number, status: boolean) {
    await this.hasuraService.setEditionStatus(id, status);
  }

  async saveEdition(id: number) {

    try {
      await firstValueFrom(
        this.hasuraService.updateEdition(
          id,
          new Date(this.application_start.value ?? ''),
          new Date(this.application_end.value ?? ''),
          this.name.value ?? ''
        )
      );

      this.form.markAsUntouched();
      this.form.markAsPristine();
    } catch (error: any) { }
  }
  async cancel() {
    this.form.disable();
    const edition = await firstValueFrom(this.selectedEdition$.pipe(first()));

    this.setFormValues(edition);

    this.form.markAsUntouched();
    this.form.markAsPristine();
    this.form.enable();
  }

  async showNewRoundModal(edition_id: number, prev_round_id?: number | null) {
    const { NewRoundComponent } = await import(
      '@library/components/modal'
    );
    return this.newRoundModalService.open(NewRoundComponent, {
      edition_id,
      prev_round_id,
    });
  }

  async showEditRoundModal(
    rating_round?: RoundFragment | RoundSortedFragment | null
  ) {
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

  closeRoundLoading?: boolean = false;
  async closeRound(round_id?: number | null, level?: number | null) {
    if (!round_id) return;
    this.closeRoundLoading = true;
    await this.hasuraService.showCloseRoundModal(round_id, level || 0);
    this.closeRoundLoading = false;
  }
}

/** A hero's name can't match the hero's alter ego */
export const mustStartBeforeEnd: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const application_start = control.get('application_start');
  const application_end = control.get('application_end');

  return application_start &&
    application_end &&
    application_start.value >= application_end.value
    ? { mustStartBeforeEnd: true }
    : null;
};

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
import { distinctUntilChanged, first } from 'rxjs/operators';
import { AlertService } from '../../../shared/components/alert/alert.service';
import { AppService } from '../../../shared/services/app.service';
import { HasuraService } from '../../../shared/services/hasura.service';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  editions$;
  currentEdition$;
  selectedEdition$;

  form: FormGroup;

  dateNow = new Date();
  timezoneOffest = new Date().getTimezoneOffset() * 60000;

  name = new FormControl('', [Validators.required, Validators.minLength(2)]);
  application_start = new FormControl('', [Validators.required]);
  application_end = new FormControl('', [Validators.required]);

  constructor(
    private fb: FormBuilder,
    private hasuraService: HasuraService,
    private teamService: TeamService,
    private alertService: AlertService
  ) {
    this.editions$ = this.teamService.getAllEditions();
    this.currentEdition$ = this.teamService.currentEdition;
    this.selectedEdition$ = this.teamService.selectedEdition;

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

  ngOnInit(): void {}

  async toggleEditionStatus(id: number, status: boolean) {
    await this.hasuraService.setEditionStatus(id, status);
  }

  async saveEdition(id: number) {
    console.log(this.timezoneOffest);
    try {
      await this.hasuraService.updateEdition(
        id,
        new Date(this.application_start.value),
        new Date(this.application_end.value),
        this.name.value
      );
      this.form.markAsUntouched();
      this.form.markAsPristine();
    } catch (error) {}
  }
  async cancel() {
    this.form.disable();
    const edition = await this.selectedEdition$.pipe(first()).toPromise();

    this.setFormValues(edition);

    this.form.markAsUntouched();
    this.form.markAsPristine();
    this.form.enable();
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

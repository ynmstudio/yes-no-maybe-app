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
import { TeamService } from 'projects/application-tool/src/app/pages/team/team.service';
import { AuthService } from '../../../../services/auth.service';
import { HasuraService } from '../../../../services/hasura.service';
import { AlertService } from '../../../alert/alert.service';
import { ModalComponent } from '../../modal.component';
@Component({
  selector: 'app-new-update',
  templateUrl: './new-update.component.html',
  styleUrls: ['./new-update.component.scss'],
})
export class NewUpdateComponent implements OnInit {
  data!: {
    edition_id: number;
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
  text_en = new FormControl('');
  text_de = new FormControl('');
  url = new FormControl('');

  @ViewChild('modalComponent') modal:
    | ModalComponent<NewUpdateComponent>
    | undefined;

  constructor(
    private fb: FormBuilder,
    private teamService: TeamService,
    private alertService: AlertService
  ) {
    this.form = this.fb.group({
      edition_id: this.edition_id,
      text_en: this.text_en,
      text_de: this.text_de,
      url: this.url,
    });
  }

  ngOnInit(): void {
    this.edition_id.setValue(this.data.edition_id);
  }

  async createNewRound() {
    if (this.form.invalid) return;

    try {
      await this.teamService.addUpdate({
        edition_id: this.edition_id.value,
        text_de: this.text_de.value,
        text_en: this.text_en.value,
        url: this.url.value,
      });
    } catch (error) {
      this.alertService.error(error);
    }
    this.close();
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}

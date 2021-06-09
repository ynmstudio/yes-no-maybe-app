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
  selector: 'app-edit-update',
  templateUrl: './edit-update.component.html',
  styleUrls: ['./edit-update.component.scss'],
})
export class EditUpdateComponent implements OnInit {
  data!: {
    id: number;
    text_en: string;
    text_de: string;
    url: string;
  };

  form: FormGroup;

  dateNow = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  );
  dateTomorrow = new Date(
    new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).getTime() -
      new Date().getTimezoneOffset() * 60000
  );

  id = new FormControl('');
  text_en = new FormControl('');
  text_de = new FormControl('');
  url = new FormControl('');

  @ViewChild('modalComponent') modal:
    | ModalComponent<EditUpdateComponent>
    | undefined;

  constructor(
    private fb: FormBuilder,
    private teamService: TeamService,
    private alertService: AlertService
  ) {
    this.form = this.fb.group({
      id: this.id,
      text_en: this.text_en,
      text_de: this.text_de,
      url: this.url,
    });
  }

  ngOnInit(): void {
    this.id.setValue(this.data.id);
    this.text_en.setValue(this.data.text_en);
    this.text_de.setValue(this.data.text_de);
    this.url.setValue(this.data.url);
  }

  async editUpdate() {
    if (this.form.invalid) return;

    try {
      await this.teamService.editUpdate(this.id.value, {
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

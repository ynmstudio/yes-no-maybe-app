import { Component, OnInit, ViewChild } from '@angular/core';
import {

  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { ModalComponent } from '../../modal.component';
import { TeamService } from '@library/services/team';
import { AlertService } from '@library/components/alert';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-edit-update',
  imports: [CommonModule, TranslateModule, ReactiveFormsModule, FormsModule, ModalComponent],
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

  id = new FormControl<number>(0);
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

    if (!this.id.value) {
      return;
    }
    try {
      await this.teamService.editUpdate(this.id.value, {
        text_de: this.text_de.value,
        text_en: this.text_en.value,
        url: this.url.value,
      });
    } catch (error: any) {
      this.alertService.error(error);
    }
    this.close();
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}

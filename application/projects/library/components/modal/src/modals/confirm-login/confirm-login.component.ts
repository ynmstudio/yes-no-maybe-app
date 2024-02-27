import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../../../services/src/auth.service';
import { AlertService } from '../../../../alert/src/alert.service';
import { ModalComponent } from '../../modal.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-confirm-login',
  imports: [CommonModule, TranslateModule, ReactiveFormsModule, FormsModule, ModalComponent],
  templateUrl: './confirm-login.component.html',
  styleUrls: ['./confirm-login.component.scss'],
})
export class ConfirmLoginComponent implements OnInit {
  data: string = ''; // EMAIL

  password: string = '';

  @ViewChild('modalComponent') modal:
    | ModalComponent<ConfirmLoginComponent>
    | undefined;
  constructor(
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void { }

  async login(password: string) {
    try {
      await this.authService.login(this.data, password);
    } catch (error: any) {
      this.alertService.error(error);
    }
    this.close();
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}

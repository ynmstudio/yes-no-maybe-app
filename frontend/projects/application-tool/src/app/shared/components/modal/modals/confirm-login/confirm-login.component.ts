import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { AlertService } from '../../../alert/alert.service';
import { ModalComponent } from '../../modal.component';

@Component({
  selector: 'app-confirm-login',
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
  ) {}

  ngOnInit(): void {}

  async login(password: string) {
    try {
      await this.authService.login(this.data, password);
    } catch (error) {
      this.alertService.error(error);
    }
    this.close();
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}

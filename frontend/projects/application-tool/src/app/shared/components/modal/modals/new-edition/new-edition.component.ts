import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { HasuraService } from '../../../../services/hasura.service';
import { AlertService } from '../../../alert/alert.service';
import { ModalComponent } from '../../modal.component';

@Component({
  selector: 'app-new-edition',
  templateUrl: './new-edition.component.html',
  styleUrls: ['./new-edition.component.scss'],
})
export class NewEditionComponent implements OnInit {
  data: string = '';

  name: string = '';

  @ViewChild('modalComponent') modal:
    | ModalComponent<NewEditionComponent>
    | undefined;
  constructor(
    private hasuraService: HasuraService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  async createNewEdition(name: string) {
    try {
      await this.hasuraService.createEdition(name);
    } catch (error) {
      this.alertService.error(error);
    }
    this.close();
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}

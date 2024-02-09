import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from '../../modal.component';
import { HasuraService } from '@library/services';
import { AlertService } from '@library/components/alert';

@Component({
  standalone: true,
  selector: 'app-new-edition',
  imports: [CommonModule, TranslateModule, ReactiveFormsModule, FormsModule, ModalComponent],
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
  ) {
  }

  ngOnInit(): void { }

  async createNewEdition(name: string) {
    try {
      await this.hasuraService.createEdition(name);
    } catch (error: any) {
      this.alertService.error(error);
    }
    this.close();
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}

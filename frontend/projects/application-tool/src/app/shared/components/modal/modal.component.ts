import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent<T> implements AfterViewInit {
  display = false;

  @Input() boxed: boolean = true;

  constructor(private modalService: ModalService<T>) {}

  async close(): Promise<void> {
    this.display = false;

    setTimeout(async () => {
      await this.modalService.close();
    }, 300);
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.display = true;
    }, 100);
  }
}

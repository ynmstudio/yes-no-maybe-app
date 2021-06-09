import {
  Directive,
  HostListener,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Directive({
  selector: '[dropzone]',
})
export class DropzoneDirective {
  @Input() disabled: boolean = false;

  @Output() dropped = new EventEmitter<FileList>();
  @Output() hovered = new EventEmitter<boolean>();

  @HostListener('drop', ['$event'])
  onDrop($event: any) {
    $event.preventDefault();
    if (this.disabled) return;
    this.dropped.emit($event.dataTransfer.files);
    this.hovered.emit(false);
  }

  @HostListener('dragover', ['$event'])
  onDragOver($event: any) {
    $event.preventDefault();
    if (this.disabled) return;
    this.hovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event: any) {
    $event.preventDefault();
    if (this.disabled) return;
    this.hovered.emit(false);
  }
}

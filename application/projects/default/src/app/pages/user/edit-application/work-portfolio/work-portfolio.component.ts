import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FileFragment,
  WorkFileFragment,
} from 'generated/types.graphql-gen';
import { UserService } from '@library/services/user';
import { SharedModule } from 'projects/default/src/app/shared/shared.module';
import { UploadTaskComponent } from '@library/components/upload-task';

@Component({
  standalone: true,
  selector: 'app-work-portfolio',
  imports: [SharedModule, UploadTaskComponent],
  templateUrl: './work-portfolio.component.html',
  styleUrls: ['./work-portfolio.component.scss'],
})
export class WorkPortfolioComponent implements OnInit {
  @Input() application_id: string = '';
  @Input() work_id: string = '';
  @Input() files: Array<WorkFileFragment> = [];

  @Output() pendingUploads: EventEmitter<boolean> = new EventEmitter();

  get path_prefix() {
    return `applications/${this.application_id}/portfolio/${this.work_id}`;
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void { }

  filesToUpload: File[] = [];

  isHovering: boolean = false;
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    if (files.length > 1) {
      alert('Only single file allowed. Uploading first file.');
    }
    const file = files.item(0);
    if (file) {
      this.filesToUpload.push(file);
      this.pendingUploads.next(true);
    }
  }
  onFileSelect(fileInput: any) {
    if (fileInput.target.files) {
      this.onDrop(fileInput.target.files);
    }
  }
  async finishTask(filesToUpload: File[], index: number, asset?: FileFragment) {
    if (asset) {
      await this.userService.addWorkFile(
        asset,
        this.files.length,
        this.work_id,
        this.application_id
      );
    }

    filesToUpload.splice(index, 1);
    this.pendingUploads.next(filesToUpload.length > 0);
  }

  async deleteFile(id: string) {
    await this.userService.deleteWorkFile(
      id,
      this.work_id,
      this.application_id
    );
  }

  trackByKeyFn(index: number, item: any) {
    return item.key;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FileFragment, WorkFileFragment } from 'generated/types.graphql-gen';

@Component({
  selector: 'app-work-portfolio',
  templateUrl: './work-portfolio.component.html',
  styleUrls: ['./work-portfolio.component.scss'],
})
export class WorkPortfolioComponent implements OnInit {
  @Input() application_id: string = '';
  @Input() work_id: string = '';
  @Input() files: Array<WorkFileFragment> = [];

  get path_prefix() {
    return `applications/${this.application_id}/portfolio/${this.work_id}`;
  }

  constructor() {}

  ngOnInit(): void {}

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
    if (file) this.filesToUpload.push(file);
  }
  onFileSelect(fileInput: any) {
    if (fileInput.target.files) {
      this.onDrop(fileInput.target.files);
    }
  }
  finishTask(filesToUpload: File[], index: number, asset: FileFragment) {
    console.log(asset);
    // if (Array.isArray(data)) {
    //   data.push({
    //     sys: { type: "Link", linkType: "Asset", id: asset.sys.id }
    //   });
    // } else {
    //   this.galleryForm.patchValue(
    //     this.getVarAsKey(data, {
    //       sys: { type: "Link", linkType: "Asset", id: asset.sys.id }
    //     })
    //   );
    // }
    filesToUpload.splice(index, 1);
  }
}

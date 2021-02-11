import { Component, Input, OnInit } from '@angular/core';
import { ApolloCache } from '@apollo/client/core';
import {
  AddWorkFileGQL,
  ApplicationFragmentDoc,
  FileFragment,
  WorkFileFragment,
  WorkFragmentDoc,
} from 'generated/types.graphql-gen';
import { UserService } from '../../user.service';

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

  constructor(
    private addWorkFileGQL: AddWorkFileGQL,
    private userService: UserService
  ) {}

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
  async finishTask(filesToUpload: File[], index: number, asset: FileFragment) {
    console.log(asset);

    await this.addWorkFileGQL
      .mutate(
        {
          application_id: this.application_id,
          work_id: this.work_id,
          order: this.files.length || 0,
          ...asset,
        },
        {
          update: (store, { data: { ...addedFile } }) => {
            this.userService.updateApplicationFragment(
              store,
              addedFile.update_applications_by_pk?.id,
              addedFile?.update_applications_by_pk?.updated_at
            );

            // Read the data from our cache for this query.
            let { ...data }: any = store.readFragment({
              id: `works:${this.work_id}`,
              fragment: WorkFragmentDoc,
              fragmentName: 'Work',
            });
            console.log(addedFile, data.files);
            // Filter array by deleted producer id
            data = {
              ...data,
              files: [...data.files, addedFile],
            };
            console.log(data);
            // Write our data back to the cache.
            store.writeFragment({
              id: `works:${this.work_id}`,
              fragment: WorkFragmentDoc,
              fragmentName: 'Work',
              data,
            });
          },
        }
      )
      .toPromise();

    filesToUpload.splice(index, 1);
  }

  trackByKeyFn(index: number, item: any) {
    return item.key;
  }
}

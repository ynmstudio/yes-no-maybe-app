import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ApolloCache } from '@apollo/client/core';
import {
  FileFragment,
  WorkFileFragment,
  AddWorkFileGQL,
  ApplicationFragmentDoc,
  WorkFragmentDoc,
} from 'generated/types.graphql-gen';

@Component({
  selector: 'app-work-files',
  templateUrl: './work-files.component.html',
  styleUrls: ['./work-files.component.scss'],
})
export class WorkFilesComponent implements OnInit {
  @Input() application_id: string = '';
  @Input() work_id: string = '';
  @Input() files: Array<WorkFileFragment> = [];

  maxFiles: number = 5;

  get path_prefix() {
    return `applications/${this.application_id}/works/${this.work_id}`;
  }

  constructor(
    private storage: AngularFireStorage,
    private addWorkFileGQL: AddWorkFileGQL
  ) {}

  ngOnInit(): void {
    this.files.forEach(async (file) => {
      const url = await this.getDownloadURL(file.key).toPromise();
      console.log(url);
    });
  }

  filesToUpload: File[] = [];

  isHovering: boolean = false;
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (file) this.filesToUpload.push(file);
    }
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
            this.updateApplicationFragment(
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

  getDownloadURL(key: string) {
    return this.storage.ref(key).getDownloadURL();
  }

  private updateApplicationFragment(
    store: ApolloCache<any>,
    application_id: string,
    updated_at: string
  ) {
    // Read the data from our cache for this query.
    let { ...data }: any = store.readFragment({
      id: `applications:${application_id}`,
      fragment: ApplicationFragmentDoc,
      fragmentName: 'Application',
      optimistic: true,
    });
    // Add our message from the mutation to the end.
    data = { ...data, updated_at };
    // Write our data back to the cache.
    store.writeFragment({
      id: `applications:${application_id}`,
      fragment: ApplicationFragmentDoc,
      fragmentName: 'Application',
      data,
    });
  }

  trackByKeyFn(index: number, item: any) {
    return item.key;
  }
}

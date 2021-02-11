import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import {
  FileFragment,
  WorkFileFragment,
  WorkFragmentDoc,
  WorkFileFragmentDoc,
  UpdateWorkFilesOrderGQL,
} from 'generated/types.graphql-gen';
import { UserService } from '../../user.service';

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
    private userService: UserService,
    private updateWorkFilesOrderGQL: UpdateWorkFilesOrderGQL
  ) {}

  ngOnInit(): void {}

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

    await this.userService.addWorkFile(
      asset,
      this.files.length,
      this.work_id,
      this.application_id
    );

    filesToUpload.splice(index, 1);
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

  /*
   * SORTING
   */

  /**
   * drop and sort portoflio specifications
   * @param work_id current work item
   * @param items specifications to sort
   * @param event the drop event
   */
  async reorderFiles(
    items: WorkFileFragment[],
    event: CdkDragDrop<WorkFileFragment[]>
  ) {
    if (event.previousContainer === event.container) {
      const newItems = [...items];
      moveItemInArray(newItems, event.previousIndex, event.currentIndex);

      const objects = newItems.map((item, index) => {
        return {
          id: item.id,
          work_id: item.work_id,
          order: index,
          key: '',
          mimetype: '',
          originalname: '',
          application_id: item.application_id,
          size: 0,
        };
      });

      await this.updateWorkFilesOrderGQL
        .mutate(
          {
            objects,
          },
          {
            optimisticResponse: {
              insert_works_files: {
                __typename: 'works_files_mutation_response',
                returning: [
                  ...objects.map((object) => {
                    return {
                      id: object.id,
                      order: object.order,
                      __typename: 'works_files',
                    };
                  }),
                ] as any,
              },
            },
            update: (store, { data: { ...updatedFiles } }) => {
              // Read the data from our cache for this query.
              let { ...data }: any = store.readFragment({
                id: `works:${this.work_id}`,
                fragment: WorkFragmentDoc,
                fragmentName: 'Work',
                optimistic: true,
              });
              console.log(data);
              // Update objects
              data.files = data.files.map((file: any) => {
                let updatedFile = updatedFiles?.insert_works_files?.returning.find(
                  (updatedFile) => updatedFile.id === file.id
                );
                if (updatedFile) {
                  return { ...file, ...updatedFile };
                }
              });
              data.files.sort(
                (a: WorkFileFragment, b: WorkFileFragment) =>
                  (a.order == null ? 9999 : a.order) -
                  (b.order == null ? 9999 : b.order)
              );
              // Write our data back to the cache.
              store.writeFragment({
                id: `works:${this.work_id}`,
                fragment: WorkFragmentDoc,
                fragmentName: 'Work',
                data,
              });

              updatedFiles?.insert_works_files?.returning.forEach(
                (updatedFile: any) => {
                  // Read the data from our cache for this query.
                  let { ...data }: any = store.readFragment({
                    id: `works_files:${updatedFile.id}`,
                    fragment: WorkFileFragmentDoc,
                    fragmentName: 'WorkFile',
                    optimistic: true,
                  });
                  // Add our message from the mutation to the end.
                  data = { ...data, order: updatedFile.order };

                  // Write our data back to the cache.
                  store.writeFragment({
                    id: `works_files:${updatedFile.id}`,
                    fragment: WorkFileFragmentDoc,
                    fragmentName: 'WorkFile',
                    data,
                  });
                }
              );
            },
          }
        )
        .toPromise();
    } else {
    }
  }
}

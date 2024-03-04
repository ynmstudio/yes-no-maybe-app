import { CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, Output, EventEmitter, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  FileFragment,
  WorkFileFragment,
  WorkFragmentDoc,
  WorkFileFragmentDoc,
  UpdateWorkFilesOrderGQL,
} from 'generated/types.graphql-gen';
import { UserService } from '@library/services/user';
import { v4 as uuidv4 } from 'uuid';
import { SharedModule } from 'projects/default/src/app/shared/shared.module';
import { DropzoneDirective } from '@library/directives/dropzone';
import { RemoteConfig, getBoolean, getNumber } from '@angular/fire/remote-config';

@Component({
  standalone: true,
  selector: 'app-work-files',
  imports: [SharedModule, DropzoneDirective, CdkDropList],
  templateUrl: './work-files.component.html',
  styleUrls: ['./work-files.component.scss'],
})
export class WorkFilesComponent implements OnInit {
  @Input() application_id: string = '';
  @Input() work_id: string = '';
  @Input() files: Array<WorkFileFragment> = [];

  @Output() pendingUploads: EventEmitter<boolean> = new EventEmitter();

  form: FormGroup;

  remoteConfig = inject(RemoteConfig);

  maxFiles: number = getNumber(this.remoteConfig, 'MaxFiles') || 5;

  get path_prefix() {
    return `applications/${this.application_id}/works/${this.work_id}`;
  }
  get video_url() {
    return this.form.get('video_url');
  }


  get allowVideo() {
    return getBoolean(this.remoteConfig, 'AllowVideo')
  }

  constructor(
    private fb: FormBuilder,

    private userService: UserService,
    private updateWorkFilesOrderGQL: UpdateWorkFilesOrderGQL
  ) {
    this.form = this.fb.group({
      video_url: new FormControl(
        '',
        Validators.pattern(
          /^(http:\/\/|https:\/\/)(vimeo\.com|youtu\.be|www\.youtube\.com)\/([\w\/]+)([\?].*)?$/
        )
      ),
      video_password: new FormControl(''),
    });
  }

  ngOnInit(): void { }

  filesToUpload: File[] = [];

  isHovering: boolean = false;
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (file) {
        this.filesToUpload.push(file);
        this.pendingUploads.next(true);
      }
    }
  }
  onFileSelect(fileInput: any) {
    if (fileInput.target.files) {
      this.onDrop(fileInput.target.files);
    }
  }
  async finishTask(index: number, asset?: FileFragment) {
    this.filesToUpload.splice(index, 1);
    this.pendingUploads.next(this.filesToUpload.length > 0);
    if (asset) {
      await this.userService.addWorkFile(
        asset,
        this.files.length,
        this.work_id,
        this.application_id
      );
    }
  }

  async deleteFile(id: string) {
    await this.userService.deleteWorkFile(
      id,
      this.work_id,
      this.application_id
    );
  }

  showVideoFields: boolean = false;
  toggleOptionalVideoFields() {
    this.showVideoFields = !this.showVideoFields;
  }

  async addVideo() {
    if (this.form.pristine || !this.form.valid) return;
    const asset: FileFragment = {
      id: uuidv4(),
      key: this.form.get('video_url')?.value,
      mimetype: 'text/html',
      originalname: this.form.get('video_url')?.value,
      size: 0,
      password: this.form.get('video_password')?.value,
    };
    await this.userService.addWorkFile(
      asset,
      this.files.length,
      this.work_id,
      this.application_id
    );
    this.form.reset();
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
              insert_work_files: {
                __typename: 'work_files_mutation_response',
                returning: [
                  ...objects.map((object) => {
                    return {
                      id: object.id,
                      order: object.order,
                      __typename: 'work_files',
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
              // Update objects
              data.files = data.files.map((file: any) => {
                let updatedFile =
                  updatedFiles?.insert_work_files?.returning.find(
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

              updatedFiles?.insert_work_files?.returning.forEach(
                (updatedFile: any) => {
                  // Read the data from our cache for this query.
                  let { ...data }: any = store.readFragment({
                    id: `work_files:${updatedFile.id}`,
                    fragment: WorkFileFragmentDoc,
                    fragmentName: 'WorkFile',
                    optimistic: true,
                  });
                  // Add our message from the mutation to the end.
                  data = { ...data, order: updatedFile.order };

                  // Write our data back to the cache.
                  store.writeFragment({
                    id: `work_files:${updatedFile.id}`,
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



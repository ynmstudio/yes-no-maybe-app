import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  Component,
  HostListener,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ApplicationFragment,
  GetApplicationGQL,
  UpdateApplicationGQL,
  AddWorkGQL,
  GetSingleWorksGQL,
  GetSingleWorksDocument,
  GetPortfolioWorksGQL,
  GetPortfolioWorksDocument,
  AddPortfolioSpecificationGQL,
  WorkFragmentDoc,
  WorkFragment,
  WorkSpecificationFragment,
  UpdateSpecificationsOrderGQL,
  UpdateWorksOrderGQL,
  WorkSpecificationFragmentDoc,
  FileFragment,
} from 'generated/types.graphql-gen';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { ModalService } from '../../../shared/components/modal/modal.service';
import { UserService } from '../user.service';
import { WorkSpecificationComponent } from './work-specification/work-specification.component';
import { DeleteWorkComponent as DeleteWorkComponentType } from './../../../shared/components/modal/modals/delete-work/delete-work.component';
import { DeleteSpecificationComponent as DeleteSpecificationComponentType } from './../../../shared/components/modal/modals/delete-specification/delete-specification.component';
import { AuthService } from '../../../shared/services/auth.service';
@Component({
  selector: 'app-edit-application',
  templateUrl: './edit-application.component.html',
  styleUrls: ['./edit-application.component.scss'],
})
export class EditApplicationComponent implements OnInit {
  @HostListener('window:beforeunload')
  canDeactivate(): boolean {
    return !this.form.dirty && !this.pendingUploads;
  }

  form: FormGroup;

  isNew: boolean = false;

  get name() {
    return this.form.get('name');
  }
  get group() {
    return this.form.get('group');
  }

  statementMinLenght = 250;
  statementMaxLength = 1000;
  get statement() {
    return this.form.get('statement');
  }
  get disclaimer() {
    return this.form.get('disclaimer');
  }
  get payment() {
    return this.form.get('payment');
  }
  get updated_at() {
    return this.form.get('updated_at');
  }
  get id() {
    return this.form.get('id');
  }
  get edition() {
    return this.form.get('edition');
  }

  get application_id() {
    return this.route.snapshot.params['id'];
  }

  private _pendingUploads: boolean = false;
  set pendingUploads(state: boolean) {
    this._pendingUploads = state;
  }
  get pendingUploads() {
    return this._pendingUploads;
  }

  singleWorks$;
  portfolioWorks$;

  @ViewChildren(WorkSpecificationComponent)
  specificationComponents!: QueryList<WorkSpecificationComponent>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private modalServiceWork: ModalService<DeleteWorkComponentType>,
    private modalServiceSpecification: ModalService<DeleteSpecificationComponentType>,
    private getApplicationGQL: GetApplicationGQL,
    private updateApplicationGQL: UpdateApplicationGQL,
    private addWorkGQL: AddWorkGQL,
    private getSingleWorksGQL: GetSingleWorksGQL,
    private getPortfolioWorksGQL: GetPortfolioWorksGQL,
    private addPortfolioSpecificationGQL: AddPortfolioSpecificationGQL,
    private updateSpecificationsOrderGQL: UpdateSpecificationsOrderGQL,
    private updateWorksOrderGQL: UpdateWorksOrderGQL,
    private authService: AuthService
  ) {
    // If navigation extra is set by dashboard on addApplication() show "New Application" headline
    this.isNew = this.router.getCurrentNavigation()?.extras.state?.new || false;

    this.singleWorks$ = this.getSingleWorksGQL.watch(
      { application_id: this.application_id },
      {
        fetchPolicy: 'cache-and-network',
      }
    ).valueChanges;

    this.portfolioWorks$ = this.getPortfolioWorksGQL.watch(
      { application_id: this.application_id },
      {
        fetchPolicy: 'cache-and-network',
      }
    ).valueChanges;

    this.form = this.fb.group({
      name: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(100)],
      }),
      group: new FormControl(false),
      works: new FormControl(0, { validators: Validators.min(1) }),
      statement: new FormControl('', {
        validators: Validators.maxLength(this.statementMaxLength * 1.05),
        asyncValidators: Validators.composeAsync([
          this.authService.checkRevealedUsername(),
        ]),
      }),
      residency: new FormControl(false),
      database: new FormControl(false),
      disclaimer: new FormControl(false, {
        validators: Validators.requiredTrue,
      }),
      payment: new FormControl(null, {
        validators: Validators.required,
      }),
    });
    this.form.disable();

    this.getApplicationGQL
      .watch(
        { id: this.application_id },
        {
          fetchPolicy: 'cache-and-network',
        }
      )
      .valueChanges.subscribe((resp) => {
        const application = resp.data.applications_by_pk as any;

        for (const key in application) {
          if (application.hasOwnProperty(key)) {
            let control = this.form.get(key);
            if (control) {
              control.setValue(application[key]);
            } else {
              this.form.addControl(key, new FormControl(application[key]));
            }
          }
        }
        if (application)
          this.form
            .get('works')
            ?.setValue(application.works_aggregate.aggregate.count);

        this.form.enable();
      });

    this.form.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(2000))
      .subscribe((changes) => {
        this.saveApplication();
      });
  }

  ngOnInit(): void {}

  async toggleGroup() {
    this.form.get('group')?.setValue(!this.form.get('group')?.value);
    this.form.markAsDirty();
  }
  async saveAndClose() {
    await this.saveApplication();
    this.specificationComponents.forEach(async (component) => {
      await component.saveSpecification();
    });
    this.router.navigate(['u', 'dashboard']);
  }
  async finalizeAndClose() {
    await this.saveApplication();
    this.specificationComponents.forEach(async (component) => {
      await component.saveSpecification();
    });
    await this.userService.lockApplication(this.application_id);
    this.router.navigate(['u', 'dashboard']);
  }

  async saveApplication() {
    if (this.form.pristine) return;
    const application: ApplicationFragment = this.form.value;

    let data = {
      name: this.form.get('name')?.value || '',
      group: this.form.get('group')?.value || false,
      statement: this.form.get('statement')?.value || '',
      residency: this.form.get('residency')?.value || false,
      database: this.form.get('database')?.value || false,
      disclaimer: this.form.get('disclaimer')?.value || false,
    } as ApplicationFragment;

    await this.updateApplicationGQL
      .mutate({
        id: this.application_id,
        data,
      })
      .toPromise();

    this.form.markAsPristine();
  }

  /**
   * Add a work item to the applicatoin
   * @param portfolio Should the work be added as the single portfolio element?
   */
  async addWork(portfolio?: boolean) {
    await this.addWorkGQL
      .mutate(
        {
          application_id: this.application_id,
          portfolio,
        },
        {
          update: (store, { data: { ...newWork } }) => {
            const variables = {
              application_id: this.application_id,
            };
            // Read the data from our cache for this query.
            let { ...data }: any = store.readQuery({
              query: portfolio
                ? GetPortfolioWorksDocument
                : GetSingleWorksDocument,
              variables,
            });
            // Filter array by deleted producer id
            data.works = [...data.works, newWork];
            // Write our data back to the cache.
            store.writeQuery({
              query: portfolio
                ? GetPortfolioWorksDocument
                : GetSingleWorksDocument,
              variables,
              data,
            });

            this.userService.updateWorkCount(store, this.application_id, 1);
          },
        }
      )
      .toPromise();
  }

  async addPortfolioSpecification(work_id: string, order: number) {
    await this.addPortfolioSpecificationGQL
      .mutate(
        {
          application_id: this.application_id,
          work_id,
          order,
        },
        {
          update: (store, { data: { ...newSpecification } }) => {
            // Read the data from our cache for this query.
            let { ...data }: any = store.readFragment({
              id: `works:${work_id}`,
              fragment: WorkFragmentDoc,
              fragmentName: 'Work',
            });

            data = {
              ...data,
              specifications: [...data.specifications, newSpecification],
            };

            // Write our data back to the cache.
            store.writeFragment({
              id: `works:${work_id}`,
              fragment: WorkFragmentDoc,
              fragmentName: 'Work',
              data,
            });
          },
        }
      )
      .toPromise();
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }

  async deleteWork(id: string) {
    const { DeleteWorkComponent } = await import(
      './../../../shared/components/modal/modals/delete-work/delete-work.component'
    );
    await this.modalServiceWork.open(DeleteWorkComponent, id);
  }

  async deleteSpecification(id: string) {
    const { DeleteSpecificationComponent } = await import(
      './../../../shared/components/modal/modals/delete-specification/delete-specification.component'
    );
    await this.modalServiceSpecification.open(DeleteSpecificationComponent, id);
  }

  /**
   * PAYMENT FILE
   */

  get payment_path_prefix() {
    return `applications/${this.application_id}/payment`;
  }

  isHovering: boolean = false;
  toggleHover(event: boolean) {
    this.isHovering = event;
  }
  paymentFileToUpload: File[] = [];
  onPaymentFileSelect(fileInput: any) {
    if (fileInput.target.files) {
      this.onPaymentDrop(fileInput.target.files);
    }
  }
  onPaymentDrop(files: FileList) {
    if (files.length > 1) {
      alert('Only single file allowed. Uploading first file.');
    }
    const file = files.item(0);
    if (file) this.paymentFileToUpload.push(file);
  }
  async finishPaymentTask(
    paymentFileToUpload: File[],
    index: number,
    asset?: FileFragment
  ) {
    if (asset) await this.userService.addPayment(asset, this.application_id);

    paymentFileToUpload.splice(index, 1);
  }

  async deletePayment(id: string) {
    await this.userService.deletePayment(id, this.application_id);
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
  async dropSpecifications(
    work_id: string,
    items: WorkSpecificationFragment[],
    event: CdkDragDrop<WorkSpecificationFragment[]>
  ) {
    if (event.previousContainer === event.container) {
      const newItems = [...items];
      moveItemInArray(newItems, event.previousIndex, event.currentIndex);

      const objects = newItems.map((item, index) => {
        return {
          id: item.id,
          application_id: item.application_id,
          work_id: item.work_id,
          order: index,
        };
      });

      await this.updateSpecificationsOrderGQL
        .mutate(
          {
            objects,
          },
          {
            optimisticResponse: {
              insert_work_specifications: {
                __typename: 'work_specifications_mutation_response',
                returning: [
                  ...objects.map((object) => {
                    return {
                      id: object.id,
                      order: object.order,
                      __typename: 'work_specifications',
                    };
                  }),
                ] as any,
              },
            },
            update: (store, { data: { ...updatedSpecifications } }) => {
              // Read the data from our cache for this query.
              let { ...data }: any = store.readFragment({
                id: `works:${work_id}`,
                fragment: WorkFragmentDoc,
                fragmentName: 'Work',
                optimistic: true,
              });

              // Update objects
              data.specifications = data.specifications.map(
                (specification: any) => {
                  let updatedSpecification =
                    updatedSpecifications?.insert_work_specifications?.returning.find(
                      (updatedSpecification) =>
                        updatedSpecification.id === specification.id
                    );
                  if (updatedSpecification) {
                    return { ...specification, ...updatedSpecification };
                  }
                }
              );
              data.specifications.sort(
                (a: WorkSpecificationFragment, b: WorkSpecificationFragment) =>
                  (a.order == null ? 9999 : a.order) -
                  (b.order == null ? 9999 : b.order)
              );
              // Write our data back to the cache.
              store.writeFragment({
                id: `works:${work_id}`,
                fragment: WorkFragmentDoc,
                fragmentName: 'Work',
                data,
              });

              updatedSpecifications?.insert_work_specifications?.returning.forEach(
                (updatedSpecification: any) => {
                  // Read the data from our cache for this query.
                  let { ...data }: any = store.readFragment({
                    id: `work_specifications:${updatedSpecification.id}`,
                    fragment: WorkSpecificationFragmentDoc,
                    fragmentName: 'WorkSpecification',
                    optimistic: true,
                  });
                  // Add our message from the mutation to the end.
                  data = { ...data, order: updatedSpecification.order };
                  // Write our data back to the cache.
                  store.writeFragment({
                    id: `work_specifications:${updatedSpecification.id}`,
                    fragment: WorkSpecificationFragmentDoc,
                    fragmentName: 'WorkSpecification',
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

  /**
   * drop and sort single work items
   * @param items Work items
   * @param event drop event
   */
  async dropWorks(
    items: WorkFragment[] | undefined,
    event: CdkDragDrop<WorkFragment[]>
  ) {
    if (items && event.previousContainer === event.container) {
      const newItems = [...items];
      moveItemInArray(newItems, event.previousIndex, event.currentIndex);

      const objects = newItems.map((item, index) => {
        return {
          id: item.id,
          application_id: this.application_id,
          order: index,
        };
      });

      await this.updateWorksOrderGQL
        .mutate(
          {
            objects,
          },
          {
            optimisticResponse: {
              insert_works: {
                __typename: 'works_mutation_response',
                returning: [
                  ...objects.map((object) => {
                    return {
                      id: object.id,
                      order: object.order,
                      __typename: 'works',
                    };
                  }),
                ] as any,
              },
            },
            update: (store, { data: { ...updatedWorks } }) => {
              const variables = { application_id: this.application_id };

              // Read the data from our cache for this query.
              let { ...data }: any = store.readQuery({
                query: GetSingleWorksDocument,
                variables,
                optimistic: true,
              });

              // Update objects
              data.works = data.works.map((work: any) => {
                let updatedWork = updatedWorks?.insert_works?.returning.find(
                  (updatedWork: any) => updatedWork.id === work.id
                );
                if (updatedWork) {
                  return { ...work, ...updatedWork };
                }
              });
              data.works.sort(
                (a: WorkFragment, b: WorkFragment) =>
                  (a.order == null ? 9999 : a.order) -
                  (b.order == null ? 9999 : b.order)
              );
              // Write our data back to the cache.
              store.writeQuery({
                query: GetSingleWorksDocument,
                variables,
                data,
              });
            },
          }
        )
        .toPromise();
    } else {
    }
  }
}

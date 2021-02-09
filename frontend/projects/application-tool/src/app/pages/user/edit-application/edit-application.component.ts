import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
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
} from 'generated/types.graphql-gen';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { WorkSpecificationComponent } from './work-specification/work-specification.component';

@Component({
  selector: 'app-edit-application',
  templateUrl: './edit-application.component.html',
  styleUrls: ['./edit-application.component.scss'],
})
export class EditApplicationComponent implements OnInit {
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

  singleWorks$;
  portfolioWorks$;

  @ViewChildren(WorkSpecificationComponent)
  specificationComponents!: QueryList<WorkSpecificationComponent>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private getApplicationGQL: GetApplicationGQL,
    private updateApplicationGQL: UpdateApplicationGQL,
    private addWorkGQL: AddWorkGQL,
    private getSingleWorksGQL: GetSingleWorksGQL,
    private getPortfolioWorksGQL: GetPortfolioWorksGQL,
    private addPortfolioSpecificationGQL: AddPortfolioSpecificationGQL,
    private updateSpecificationsOrderGQL: UpdateSpecificationsOrderGQL,
    private updateWorksOrderGQL: UpdateWorksOrderGQL
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
      }),
      residency: new FormControl(false),
      database: new FormControl(false),
      disclaimer: new FormControl(false, {
        validators: Validators.requiredTrue,
      }),
      payment: new FormControl(false, {
        validators: Validators.requiredTrue,
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
        console.log(resp);
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

        this.form.enable();
      });

    this.form.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(5000))
      .subscribe((changes) => {
        this.saveApplication();
      });
  }

  ngOnInit(): void {}

  toggleGroup() {
    this.form.get('group')?.setValue(!this.form.get('group')?.value);
  }
  async saveAndClose() {
    await this.saveApplication();
    this.specificationComponents.forEach(async (component) => {
      await component.saveSpecification();
    });

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
            const { ...data }: any = store.readQuery({
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
            console.log(newSpecification, data.works);
            // Filter array by deleted producer id
            data = {
              ...data,
              specifications: [...data.specifications, newSpecification],
            };
            console.log(data);
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

  /*
   * SORTING
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
              insert_works_specifications: {
                __typename: 'works_specifications_mutation_response',
                returning: [
                  ...objects.map((object) => {
                    return {
                      id: object.id,
                      order: object.order,
                      __typename: 'works_specifications',
                    };
                  }),
                ] as any,
              },
            },
            update: (store, { data: { ...updatedSpecifications } }) => {
              console.log(
                updatedSpecifications?.insert_works_specifications?.returning
              );
              // Read the data from our cache for this query.
              let { ...data }: any = store.readFragment({
                id: `works:${work_id}`,
                fragment: WorkFragmentDoc,
                fragmentName: 'Work',
                optimistic: true,
              });
              // Filter array by deleted producer id
              console.warn(data.specifications);
              data.specifications = updatedSpecifications?.insert_works_specifications?.returning.map(
                (updatedSpecification) => {
                  let item = data.specifications.find(
                    (specification: any) =>
                      updatedSpecification.id === specification.id
                  );
                  if (updatedSpecification) {
                    return { ...updatedSpecification, ...item };
                  }
                }
              );
              console.warn(data.specifications);
              // // Write our data back to the cache.
              store.writeFragment({
                id: `works:${work_id}`,
                fragment: WorkFragmentDoc,
                fragmentName: 'Work',
                data,
              });

              updatedSpecifications?.insert_works_specifications?.returning.forEach(
                (updatedSpecification: any) => {
                  // Read the data from our cache for this query.
                  let { ...data }: any = store.readFragment({
                    id: `works_specifications:${updatedSpecification.id}`,
                    fragment: WorkSpecificationFragmentDoc,
                    fragmentName: 'WorkSpecification',
                    optimistic: true,
                  });
                  // Add our message from the mutation to the end.
                  data = { ...data, order: updatedSpecification.order };
                  // Write our data back to the cache.
                  store.writeFragment({
                    id: `works_specifications:${updatedSpecification.id}`,
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
          }
        )
        .toPromise();
    } else {
    }
  }
}

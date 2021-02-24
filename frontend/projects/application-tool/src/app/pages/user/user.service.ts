import { Injectable } from '@angular/core';
import { ApolloCache } from '@apollo/client/core';
import {
  AddWorkFileGQL,
  ApplicationFragmentDoc,
  DeleteWorkFileGQL,
  FileFragment,
  WorkFragmentDoc,
  AddPaymentGQL,
  DeletePaymentGQL,
  UnlockApplicationGQL,
  LockApplicationGQL,
  EditionStateGQL,
} from 'generated/types.graphql-gen';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private addWorkFileGQL: AddWorkFileGQL,
    private deleteWorkFileGQL: DeleteWorkFileGQL,
    private addPaymentGQL: AddPaymentGQL,
    private deletePaymentGQL: DeletePaymentGQL,
    private lockApplicationGQL: LockApplicationGQL,
    private unlockApplicationGQL: UnlockApplicationGQL,
    private editionStateGQL: EditionStateGQL
  ) {}

  getEditionState() {
    return this.editionStateGQL.subscribe();
  }

  updateApplicationFragment(
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

  updateWorkCount(
    store: ApolloCache<any>,
    application_id: string,
    number: number = 1
  ) {
    // Read the data from our cache for this query.
    let { ...data }: any = store.readFragment({
      id: `applications:${application_id}`,
      fragment: ApplicationFragmentDoc,
      fragmentName: 'Application',
      optimistic: true,
    });
    // Add our message from the mutation to the end.
    data = {
      ...data,
      works_aggregate: {
        ...data.works_aggregate,
        aggregate: {
          ...data.works_aggregate.aggregate,
          count: data.works_aggregate.aggregate.count + number,
        },
      },
    };
    // Write our data back to the cache.
    store.writeFragment({
      id: `applications:${application_id}`,
      fragment: ApplicationFragmentDoc,
      fragmentName: 'Application',
      data,
    });
  }

  async addWorkFile(
    asset: FileFragment,
    order: number = 0,
    work_id: string,
    application_id: string
  ) {
    return await this.addWorkFileGQL
      .mutate(
        {
          application_id,
          work_id,
          order,
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
              id: `works:${work_id}`,
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

  async deleteWorkFile(id: string, work_id: string, application_id: string) {
    return await this.deleteWorkFileGQL
      .mutate(
        { id, application_id: application_id },
        {
          update: (store, { data: { ...deletedFile } }) => {
            this.updateApplicationFragment(
              store,
              deletedFile.update_applications_by_pk?.id,
              deletedFile?.update_applications_by_pk?.updated_at
            );

            // Read the data from our cache for this query.
            let { ...data }: any = store.readFragment({
              id: `works:${work_id}`,
              fragment: WorkFragmentDoc,
              fragmentName: 'Work',
            });
            console.log(deletedFile, data.files);
            // Filter array by deleted producer id
            data.files = [
              ...data.files.filter(
                (file: any) =>
                  file.id !== deletedFile.delete_work_files_by_pk?.id
              ),
            ];
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
  async addPayment(asset: FileFragment, application_id: string) {
    return await this.addPaymentGQL
      .mutate(
        {
          application_id,
          ...asset,
        },
        {
          update: (store, { data: { ...addedPayment } }) => {
            this.updateApplicationFragment(
              store,
              addedPayment.update_applications_by_pk?.id,
              addedPayment?.update_applications_by_pk?.updated_at
            );

            // Read the data from our cache for this query.
            let { ...data }: any = store.readFragment({
              id: `applications:${application_id}`,
              fragment: ApplicationFragmentDoc,
              fragmentName: 'Application',
            });
            console.log(addedPayment, data.payment);
            // Filter array by deleted producer id
            data = {
              ...data,
              payment_id: addedPayment.insert_payments_one?.id,
            };
            console.log(data);
            // Write our data back to the cache.
            store.writeFragment({
              id: `applications:${application_id}`,
              fragment: ApplicationFragmentDoc,
              fragmentName: 'Application',
              data,
            });
          },
        }
      )
      .toPromise();
  }

  async deletePayment(id: string, application_id: string) {
    return await this.deletePaymentGQL
      .mutate(
        { id, application_id: application_id },
        {
          update: (store, { data: { ...deletedFile } }) => {
            this.updateApplicationFragment(
              store,
              deletedFile.update_applications_by_pk?.id,
              deletedFile?.update_applications_by_pk?.updated_at
            );

            // Read the data from our cache for this query.
            let { ...data }: any = store.readFragment({
              id: `applications:${application_id}`,
              fragment: ApplicationFragmentDoc,
              fragmentName: 'Application',
            });
            console.log(deletedFile, data.files);
            // Filter array by deleted producer id
            data.payment_id = null;
            console.log(data);
            // Write our data back to the cache.
            store.writeFragment({
              id: `applications:${application_id}`,
              fragment: ApplicationFragmentDoc,
              fragmentName: 'Application',
              data,
            });
          },
        }
      )
      .toPromise();
  }

  async lockApplication(id: string) {
    await this.lockApplicationGQL
      .mutate(
        {
          id,
        },
        {
          update: (store, { data: { ...unlockedApplication } }) => {
            // Read the data from our cache for this query.
            let { ...data }: any = store.readFragment({
              id: `applications:${unlockedApplication.update_applications_by_pk?.id}`,
              fragment: ApplicationFragmentDoc,
              fragmentName: 'Application',
            });
            console.log(unlockedApplication, data.locked);
            // Filter array by deleted producer id
            data = {
              ...data,
              locked: unlockedApplication.update_applications_by_pk?.locked,
            };
            console.log(data);
            // Write our data back to the cache.
            store.writeFragment({
              id: `applications:${unlockedApplication.update_applications_by_pk?.id}`,
              fragment: ApplicationFragmentDoc,
              fragmentName: 'Application',
              data,
            });
          },
        }
      )
      .toPromise();
  }

  async unlockApplication(id: string) {
    await this.unlockApplicationGQL
      .mutate(
        {
          id,
        },
        {
          update: (store, { data: { ...unlockedApplication } }) => {
            // Read the data from our cache for this query.
            let { ...data }: any = store.readFragment({
              id: `applications:${unlockedApplication.update_applications_by_pk?.id}`,
              fragment: ApplicationFragmentDoc,
              fragmentName: 'Application',
            });
            console.log(unlockedApplication, data.locked);
            // Filter array by deleted producer id
            data = {
              ...data,
              locked: unlockedApplication.update_applications_by_pk?.locked,
            };
            console.log(data);
            // Write our data back to the cache.
            store.writeFragment({
              id: `applications:${unlockedApplication.update_applications_by_pk?.id}`,
              fragment: ApplicationFragmentDoc,
              fragmentName: 'Application',
              data,
            });
          },
        }
      )
      .toPromise();
  }
}

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ApplicationFragment,
  DeleteApplicationGQL,
  GetApplicationsDocument,
} from 'generated/types.graphql-gen';
import { ModalComponent } from '../../modal.component';

@Component({
  selector: 'app-delete-application',
  templateUrl: './delete-application.component.html',
  styleUrls: ['./delete-application.component.scss'],
})
export class DeleteApplicationComponent implements OnInit {
  data: string = '';

  @ViewChild('modalComponent') modal:
    | ModalComponent<DeleteApplicationComponent>
    | undefined;

  constructor(private deleteApplicationGQL: DeleteApplicationGQL) {}

  ngOnInit(): void {}

  async confirmDeletion() {
    if (!this.data) return;
    await this.deleteApplicationGQL
      .mutate(
        { id: this.data },
        {
          update: (store, { data: { ...deletedApplication } }) => {
            // Read the data from our cache for this query.
            const { ...data }: any = store.readQuery({
              query: GetApplicationsDocument,
            });
            console.log(deletedApplication, data.applications);
            // Filter array by deleted producer id
            data.applications = [
              ...data.applications.filter(
                (application: ApplicationFragment) =>
                  application.id !==
                  deletedApplication.delete_applications_by_pk?.id
              ),
            ];
            console.log(data);
            // Write our data back to the cache.
            store.writeQuery({ query: GetApplicationsDocument, data });
          },
          optimisticResponse: {
            __typename: 'mutation_root',
            delete_applications_by_pk: {
              __typename: 'applications',
              id: this.data,
            },
          },
        }
      )
      .toPromise();
    this.close();
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}

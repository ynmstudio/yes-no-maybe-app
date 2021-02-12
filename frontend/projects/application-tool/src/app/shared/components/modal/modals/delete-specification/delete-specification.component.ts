import { Component, OnInit, ViewChild } from '@angular/core';
import {
  DeletePortfolioSpecificationGQL,
  DeleteWorkGQL,
  GetPortfolioWorksDocument,
  GetSingleWorksDocument,
  WorkFragmentDoc,
} from 'generated/types.graphql-gen';
import { UserService } from 'projects/application-tool/src/app/pages/user/user.service';
import { ModalComponent } from '../../modal.component';

@Component({
  selector: 'app-delete-specification',
  templateUrl: './delete-specification.component.html',
  styleUrls: ['./delete-specification.component.scss'],
})
export class DeleteSpecificationComponent implements OnInit {
  data: string = '';

  @ViewChild('modalComponent') modal:
    | ModalComponent<DeleteSpecificationComponent>
    | undefined;

  constructor(
    private deletePortfolioSpecificationGQL: DeletePortfolioSpecificationGQL
  ) {}

  ngOnInit(): void {}

  async confirmDeletion() {
    await this.deletePortfolioSpecificationGQL
      .mutate(
        { id: this.data },
        {
          update: (store, { data: { ...deletedSpecification } }) => {
            const variables = {
              application_id:
                deletedSpecification.delete_works_specifications_by_pk
                  ?.application_id,
            };

            let { ...data }: any = store.readFragment({
              id: `works:${deletedSpecification.delete_works_specifications_by_pk?.work_id}`,
              fragment: WorkFragmentDoc,
              fragmentName: 'Work',
            });
            console.log(deletedSpecification, data.specifications);
            // Filter array by deleted producer id
            data.specifications = [
              ...data.specifications.filter(
                (specification: any) =>
                  specification.id !==
                  deletedSpecification.delete_works_specifications_by_pk?.id
              ),
            ];

            console.log(data);
            // Write our data back to the cache.
            store.writeFragment({
              id: `works:${deletedSpecification.delete_works_specifications_by_pk?.work_id}`,
              fragment: WorkFragmentDoc,
              fragmentName: 'Work',
              data,
            });
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

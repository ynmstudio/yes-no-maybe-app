import { Component, OnInit, ViewChild } from '@angular/core';
import {
  DeletePortfolioSpecificationGQL,
  WorkFragmentDoc,
} from 'generated/types.graphql-gen';
import { ModalComponent } from '../../modal.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-delete-specification',
  imports: [CommonModule, TranslateModule, ReactiveFormsModule, FormsModule, ModalComponent],
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
  ) { }

  ngOnInit(): void { }

  async confirmDeletion() {
    await this.deletePortfolioSpecificationGQL
      .mutate(
        { id: this.data },
        {
          update: (store, { data: { ...deletedSpecification } }) => {
            const variables = {
              application_id:
                deletedSpecification.delete_work_specifications_by_pk
                  ?.application_id,
            };

            let { ...data }: any = store.readFragment({
              id: `works:${deletedSpecification.delete_work_specifications_by_pk?.work_id}`,
              fragment: WorkFragmentDoc,
              fragmentName: 'Work',
            });

            // Filter array by deleted producer id
            data.specifications = [
              ...data.specifications.filter(
                (specification: any) =>
                  specification.id !==
                  deletedSpecification.delete_work_specifications_by_pk?.id
              ),
            ];

            // Write our data back to the cache.
            store.writeFragment({
              id: `works:${deletedSpecification.delete_work_specifications_by_pk?.work_id}`,
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

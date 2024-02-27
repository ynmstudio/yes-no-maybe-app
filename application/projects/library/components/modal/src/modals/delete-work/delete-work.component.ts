import { Component, OnInit, ViewChild } from '@angular/core';
import {
  DeleteWorkGQL,
  GetPortfolioWorksDocument,
  GetSingleWorksDocument,
} from 'generated/types.graphql-gen';
import { ModalComponent } from '../../modal.component';
import { UserService } from '@library/services/user';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-delete-work',
  imports: [CommonModule, TranslateModule, ReactiveFormsModule, FormsModule, ModalComponent],
  templateUrl: './delete-work.component.html',
  styleUrls: ['./delete-work.component.scss'],
})
export class DeleteWorkComponent implements OnInit {
  data: string = '';

  @ViewChild('modalComponent') modal:
    | ModalComponent<DeleteWorkComponent>
    | undefined;

  constructor(
    private deleteWorkGQL: DeleteWorkGQL,
    private userService: UserService
  ) { }

  ngOnInit(): void { }

  async confirmDeletion() {
    await this.deleteWorkGQL
      .mutate(
        { id: this.data },
        {
          update: (store, { data: { ...deletedWork } }) => {
            const variables = {
              application_id: deletedWork.delete_works_by_pk?.application_id,
            };
            // Read the data from our cache for this query.
            const { ...data }: any = store.readQuery({
              query: deletedWork.delete_works_by_pk?.portfolio
                ? GetPortfolioWorksDocument
                : GetSingleWorksDocument,
              variables,
            });
            // Filter array by deleted producer id
            data.works = [
              ...data.works.filter(
                (work: any) => work.id !== deletedWork.delete_works_by_pk?.id
              ),
            ];
            // Write our data back to the cache.
            store.writeQuery({
              query: deletedWork.delete_works_by_pk?.portfolio
                ? GetPortfolioWorksDocument
                : GetSingleWorksDocument,
              variables,
              data,
            });

            this.userService.updateWorkCount(
              store,
              deletedWork.delete_works_by_pk?.application_id,
              -1
            );
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

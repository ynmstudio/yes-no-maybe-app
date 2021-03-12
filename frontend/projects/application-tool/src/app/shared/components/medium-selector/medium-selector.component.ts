import { Component, Input, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { TranslateService } from '@ngx-translate/core';
import {
  WorkSpecificationFragment,
  GetAllMediumsGQL,
  GetMediumsOfSpecificationGQL,
  UpdateMediumsOfSpecificationGQL,
  GetMediumsOfSpecificationQuery,
  DeleteMediumOfSpecificationGQL,
} from 'generated/types.graphql-gen';
import { responsePathAsArray } from 'graphql';
import { TagModel } from 'ngx-chips/core/accessor';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-medium-selector',
  templateUrl: './medium-selector.component.html',
  styleUrls: ['./medium-selector.component.scss'],
})
export class MediumSelectorComponent implements OnInit {
  @Input() application_id?: string;
  @Input() work_id?: string;
  @Input() specification?: WorkSpecificationFragment;

  allMediums$;
  mediums$!: Observable<ApolloQueryResult<GetMediumsOfSpecificationQuery>>;

  constructor(
    public translateService: TranslateService,
    private getAllMediumsGQL: GetAllMediumsGQL,
    private getMediumsOfSpecificationGQL: GetMediumsOfSpecificationGQL,
    private updateMediumsOfSpecificationGQL: UpdateMediumsOfSpecificationGQL,
    private deleteMediumOfSpecificationGQL: DeleteMediumOfSpecificationGQL
  ) {
    this.allMediums$ = this.getAllMediumsGQL.watch(
      {},
      { fetchPolicy: 'cache-and-network' }
    ).valueChanges;
  }

  ngOnInit(): void {
    if (!this.specification) return;
    this.mediums$ = this.getMediumsOfSpecificationGQL.watch(
      { id: this.specification?.id },
      { fetchPolicy: 'cache-and-network' }
    ).valueChanges;
    this.mediums$.subscribe((resp) => {
      this.mediumsAsObjects = [
        ...resp.data.work_specification_mediums.map(
          (medium) => medium.category_medium
        ),
      ];
    });
  }

  mediumsAsObjects: Array<any> = [];

  async addMedium(event: any) {
    await this.updateMediumsOfSpecificationGQL
      .mutate({
        medium_id: event.id,
        specification_id: this.specification?.id,
      })
      .toPromise();
  }
  async removeMedium(event: any) {
    await this.deleteMediumOfSpecificationGQL
      .mutate({
        medium_id: event.id,
        specification_id: this.specification?.id,
      })
      .toPromise();
  }
}

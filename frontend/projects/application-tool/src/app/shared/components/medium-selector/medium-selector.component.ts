import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  WorkSpecificationFragment,
  GetAllMediumsGQL,
} from 'generated/types.graphql-gen';
import { TagModel } from 'ngx-chips/core/accessor';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-medium-selector',
  templateUrl: './medium-selector.component.html',
  styleUrls: ['./medium-selector.component.scss'],
})
export class MediumSelectorComponent implements OnInit {
  @Input() application_id?: string;
  @Input() work_id?: string;
  @Input() specification?: WorkSpecificationFragment;

  allCategories$;

  constructor(
    public translateService: TranslateService,
    private getAllMediumsGQL: GetAllMediumsGQL
  ) {
    this.allCategories$ = this.getAllMediumsGQL.watch(
      {},
      { fetchPolicy: 'cache-and-network' }
    ).valueChanges;
  }

  ngOnInit(): void {
    if (!this.specification) return;
  }

  itemsAsObjects = [];

  updateMediums(event: any) {
    console.log(this.itemsAsObjects, event);
  }
}

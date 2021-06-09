import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WorkSpecificationFragment } from 'generated/types.graphql-gen';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.scss'],
})
export class SpecificationComponent implements OnInit {
  @Input() specification!: WorkSpecificationFragment;

  @Input() userPreview: boolean = false;

  constructor(public translateService: TranslateService) {}

  ngOnInit(): void {}
}

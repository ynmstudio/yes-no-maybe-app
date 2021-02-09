import { Component, Input, OnInit } from '@angular/core';
import { WorkSpecificationFragment } from 'generated/types.graphql-gen';
@Component({
  selector: 'app-work-specification',
  templateUrl: './work-specification.component.html',
  styleUrls: ['./work-specification.component.scss'],
})
export class WorkSpecificationComponent implements OnInit {
  @Input() application_id: string = '';
  @Input() work_id: string = '';
  @Input() specification: WorkSpecificationFragment = {};

  constructor() {}

  ngOnInit(): void {}
}

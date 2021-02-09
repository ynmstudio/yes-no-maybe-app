import { Component, Input, OnInit } from '@angular/core';
import { WorkFileFragment } from 'generated/types.graphql-gen';

@Component({
  selector: 'app-work-files',
  templateUrl: './work-files.component.html',
  styleUrls: ['./work-files.component.scss'],
})
export class WorkFilesComponent implements OnInit {
  @Input() application_id: string = '';
  @Input() work_id: string = '';
  @Input() files: Array<WorkFileFragment> = [];

  constructor() {}

  ngOnInit(): void {}
}

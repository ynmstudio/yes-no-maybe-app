import { Component, Input, OnInit } from '@angular/core';
import { WorkFileFragment } from 'generated/types.graphql-gen';

@Component({
  selector: 'app-work-portfolio',
  templateUrl: './work-portfolio.component.html',
  styleUrls: ['./work-portfolio.component.scss'],
})
export class WorkPortfolioComponent implements OnInit {
  @Input() application_id: string = '';
  @Input() work_id: string = '';
  @Input() files: Array<WorkFileFragment> = [];

  constructor() {}

  ngOnInit(): void {}
}

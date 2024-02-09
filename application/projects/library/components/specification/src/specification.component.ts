import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { WorkSpecificationFragment } from 'generated/types.graphql-gen';

@Component({
  standalone: true,
  selector: 'app-specification',
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.scss'],
})
export class SpecificationComponent implements OnInit {
  @Input() specification!: WorkSpecificationFragment;

  @Input() userPreview: boolean = false;

  constructor(public translateService: TranslateService) { }

  ngOnInit(): void { }
}

import { Component, Input, OnInit } from '@angular/core';
import { WorkFileFragment } from 'generated/types.graphql-gen';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() works!: WorkFileFragment[];

  constructor() {}

  ngOnInit(): void {}
}

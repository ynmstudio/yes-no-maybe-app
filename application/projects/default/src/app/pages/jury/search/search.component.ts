import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-search',
  imports: [SharedModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}

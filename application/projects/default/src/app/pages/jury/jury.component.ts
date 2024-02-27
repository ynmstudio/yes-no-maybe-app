import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-jury',
  imports: [SharedModule, RouterModule],

  templateUrl: './jury.component.html',
  styleUrls: ['./jury.component.scss'],
})
export class JuryComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}

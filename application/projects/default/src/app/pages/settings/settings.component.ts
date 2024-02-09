import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ROUTES } from '@angular/router';
import { routes } from './settings.routes';

@Component({
  standalone: true,
  selector: 'app-settings',
  imports: [SharedModule],
  providers: [
    {
      provide: ROUTES,
      useValue: routes

    }
  ],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

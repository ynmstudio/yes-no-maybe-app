import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit {
  applications$: Observable<any>;

  constructor(private teamService: TeamService) {
    this.applications$ = this.teamService.getAdminApplicationsByEdition();
  }

  ngOnInit(): void {}

  anonymous: boolean = true;
  toggleAnonymity() {
    this.anonymous = !this.anonymous;
  }
}

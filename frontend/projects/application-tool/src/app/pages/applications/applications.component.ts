import { Component, OnInit } from '@angular/core';
import { TeamService } from './../team/team.service';
import { Observable } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('500ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
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
  previews: boolean = true;
  togglePreviews() {
    this.previews = !this.previews;
  }
  showEliminated: boolean = false;
  toggleShowEliminated() {
    this.showEliminated = !this.showEliminated;
  }
  showUnedited: boolean = false;
  toggleShowUnedited() {
    this.showUnedited = !this.showUnedited;
  }
  _visiblePreview: string = '';
  get visiblePreview() {
    return this._visiblePreview;
  }
  set visiblePreview(application_id: string) {
    this._visiblePreview = application_id;
  }

  visibleChat: string = '';

  toggleChat(application_id: string, event: Event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (this.visibleChat === application_id) {
      this.visibleChat = '';
    } else {
      this.visibleChat = application_id;
    }
  }
}

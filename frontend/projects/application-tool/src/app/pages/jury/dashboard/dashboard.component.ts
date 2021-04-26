import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../shared/services/auth.service';
import { HasuraService } from '../../../shared/services/hasura.service';
import { JuryService } from '../jury.service';

@Component({
  selector: 'app-jury-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user$;
  state$;
  currentRound$;

  applications$;

  constructor(
    private authService: AuthService,
    private hasuraService: HasuraService,
    private juryService: JuryService
  ) {
    this.user$ = this.authService.authState;
    this.currentRound$ = this.hasuraService.getCurrentRound();

    this.state$ = this.juryService.getEditionState();
    this.applications$ = this.juryService.getApplications();
  }

  ratings: boolean = true;
  toggleRatings() {
    this.ratings = !this.ratings;
  }
  ratingCount: boolean = true;
  toggleRatingCount() {
    this.ratingCount = !this.ratingCount;
  }
  previews: boolean = false;
  togglePreviews() {
    this.previews = !this.previews;
  }
  visiblePreview: string = '';
  showPreview(application_id: string) {
    this.visiblePreview = application_id;
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

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../../team.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  application$;
  works$;

  get application_id() {
    return this.route.snapshot.params['id'];
  }

  constructor(private route: ActivatedRoute, private teamService: TeamService) {
    this.application$ = this.teamService.getAdminApplication(
      this.application_id
    );
    this.works$ = this.teamService.getWorks(this.application_id);
  }

  ngOnInit(): void {}

  async createNewAlias() {
    await this.teamService.createNewAlias(this.application_id);
  }

  anonymous: boolean = true;
  toggleAnonymity() {
    this.anonymous = !this.anonymous;
  }
}

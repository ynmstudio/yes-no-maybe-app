import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user.service';
import { SubscriptionResult } from 'apollo-angular';
import {
  GetApplicationsGQL,
  GetApplicationsQuery,
} from 'generated/types.graphql-gen';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user$;
  applications$;

  constructor(
    private getApplicationsGQL: GetApplicationsGQL,
    private afAuth: AngularFireAuth
  ) {
    this.applications$ = this.getApplicationsGQL.watch(
      {},
      { fetchPolicy: 'cache-and-network' }
    ).valueChanges;

    this.user$ = this.afAuth.authState;
  }

  ngOnInit(): void {
    this.applications$.subscribe((result) => console.warn(result));
  }
}

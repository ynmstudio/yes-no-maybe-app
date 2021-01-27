import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user.service';
import { SubscriptionResult } from 'apollo-angular';
import {
  GetApplicationsGQL,
  GetApplicationsQuery,
} from 'generated/types.graphql-gen';
import { Observable } from 'rxjs';
import { AuthMode } from '../../auth/auth.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  mode: AuthMode = 'login';

  applications$: Observable<SubscriptionResult<GetApplicationsQuery>>;

  constructor(
    private getApplicationsGQL: GetApplicationsGQL,
    private userservice: UserService,
    private afAuth: AngularFireAuth
  ) {
    this.applications$ = this.getApplicationsGQL.watch().valueChanges;
    this.afAuth.idTokenResult.subscribe((result) => console.warn(result));
  }

  ngOnInit(): void {
    this.applications$.subscribe((result) => console.warn(result));
  }
}

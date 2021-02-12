import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user.service';
import { SubscriptionResult } from 'apollo-angular';
import {
  GetApplicationsGQL,
  GetApplicationsQuery,
  AddApplicationGQL,
  GetEditionGQL,
  EditionFragment,
  UnlockApplicationGQL,
  ApplicationFragmentDoc,
} from 'generated/types.graphql-gen';
import { Observable } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ModalService } from '../../../shared/components/modal/modal.service';
import { DeleteApplicationComponent as DeleteApplicationComponentType } from '../../../shared/components/modal/modals/delete-application/delete-application.component';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user$;
  edition$: Observable<EditionFragment>;
  applications$;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private getApplicationsGQL: GetApplicationsGQL,
    private addApplicationGQL: AddApplicationGQL,
    private getEditionGQL: GetEditionGQL,
    private modalService: ModalService<DeleteApplicationComponentType>,
    private unlockApplicationGQL: UnlockApplicationGQL
  ) {
    this.edition$ = this.getEditionGQL
      .watch({}, { fetchPolicy: 'cache-and-network' })
      .valueChanges.pipe(
        map((resp) => resp.data.editions[0] as EditionFragment)
      );
    this.applications$ = this.getApplicationsGQL.watch(
      {},
      { fetchPolicy: 'cache-and-network' }
    ).valueChanges;

    this.user$ = this.authService.authState;
  }

  ngOnInit(): void {
    this.applications$.subscribe((result) => console.warn(result));
  }

  async addApplication() {
    const newApplication = await this.edition$
      .pipe(
        first(),
        switchMap((edition) => {
          return this.addApplicationGQL.mutate({ edition_id: edition.id });
        })
      )
      .toPromise();

    if (newApplication.data?.insert_applications_one?.id) {
      this.router.navigate(
        ['u', 'applications', newApplication.data?.insert_applications_one?.id],
        {
          state: { new: true },
        }
      );
    }
  }

  async unlockApplication(id: string) {
    await this.userService.unlockApplication(id);
  }

  async deleteApplication(id: string) {
    const { DeleteApplicationComponent } = await import(
      './../../../shared/components/modal/modals/delete-application/delete-application.component'
    );
    await this.modalService.open(DeleteApplicationComponent, id);
  }

  logout() {
    this.authService.logout();
  }
}

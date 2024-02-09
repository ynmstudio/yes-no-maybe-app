import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../../library/services/user/src/user.service';
import { SubscriptionResult } from 'apollo-angular';
import {
  GetApplicationsGQL,
  AddApplicationGQL,
  GetEditionGQL,
  EditionFragment,
  UnlockApplicationGQL,

  GetUpdatesSubscription,
  EditionStateSubscription,
} from 'generated/types.graphql-gen';
import { Observable } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { Router, RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { AuthService, HasuraService } from '@library/services';
import { type DeleteApplicationComponent as DeleteApplicationComponentType, ModalService } from '@library/components/modal';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule, RouterModule],
  selector: 'app-user-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class DashboardComponent implements OnInit {
  user$;
  edition$: Observable<EditionFragment>;
  applications$;

  editionState$: Observable<SubscriptionResult<EditionStateSubscription>>;
  updates$: Observable<SubscriptionResult<GetUpdatesSubscription>>;

  constructor(
    public translateService: TranslateService,
    private authService: AuthService,
    private hasuraService: HasuraService,
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

    this.user$ = this.authService.authState$;

    this.editionState$ = this.userService.getEditionState();
    this.updates$ = this.hasuraService.getUpdates();
  }

  ngOnInit(): void {
    // this.applications$.subscribe((result) => console.warn(result));
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

    if (newApplication?.data?.insert_applications_one?.id) {
      this.router.navigate(
        ['u', 'applications', newApplication.data.insert_applications_one?.id],
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
      '@library/components/modal'
    );
    await this.modalService.open(DeleteApplicationComponent, id);
  }

  logout() {
    this.authService.logout();
  }
}

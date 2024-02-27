import { Injectable } from '@angular/core';
import {

  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { AlertService } from '@library/components/alert';
import { UserService } from '@library/services/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class SubmissionIsOpenGuard {
  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.userService.getEditionState().pipe(
      map((state) => {
        const length = state.data?.editions.length || 0;
        if (length > 0) {
          const edition = state.data?.editions[length - 1];
          return edition?.state === 'submission';
        }
        this.alertService.error('Time for submission is over');
        this.router.navigate(['..']);
        return false;
      })
    );
  }
}

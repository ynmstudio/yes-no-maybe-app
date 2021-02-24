import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../../pages/user/user.service';
import { AlertService } from '../components/alert/alert.service';

@Injectable({
  providedIn: 'root',
})
export class SubmissionIsOpenGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private router: Router
  ) {}
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

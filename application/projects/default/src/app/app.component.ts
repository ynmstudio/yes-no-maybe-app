import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Renderer2 } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router, RouterModule } from '@angular/router';
import { AlertComponent } from '@library/components/alert';
import { AuthService, MultilangService } from '@library/services';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './shared/shared.module';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [SharedModule, CommonModule, RouterModule, TranslateModule, AlertComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translate3d(0, 0, 0)', opacity: 1 })),
      transition('void => *', [
        style({ transform: 'translate3d(0, 100%, 0)', opacity: 0 }),
        animate(500),
      ]),
      transition('* => void', [
        animate(
          250,
          style({ transform: 'translate3d(0, 50%, 0)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    // Your logic on beforeunload
    this.renderer.addClass(this.document.body, 'fade-out');
  }
  initialized: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router,
    public authService: AuthService,
    public multilangService: MultilangService
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // console.warn("event instanceof NavigationStart");
      }
      if (event instanceof NavigationEnd) {
        if (!this.initialized) {
          this.renderer.removeClass(this.document.body, 'fade-out');
          this.initialized = true;
        }
      }
    });
  }

  sendVerification() {
    this.authService.sendEmailVerification();
  }
  hideSendVerificationBanner = false;
  dismissSendVerification() {
    this.hideSendVerificationBanner = true;
  }
  changeLanguage(lang: string) {
    this.multilangService.updateLanguage(lang);
  }
}

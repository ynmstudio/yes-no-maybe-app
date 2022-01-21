import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Renderer2 } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { MultilangService } from './shared/services/multilang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { MultilangService } from './shared/services/multilang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'application-tool';

  constructor(
    public authService: AuthService,
    public multilangService: MultilangService
  ) {}

  sendVerification() {
    this.authService.sendEmailVerification();
  }
  changeLanguage(lang: string) {
    this.multilangService.updateLanguage(lang);
  }
}

import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'application-tool';

  constructor(public authService: AuthService) {}

  sendVerification() {
    this.authService.sendEmailVerification();
  }
}

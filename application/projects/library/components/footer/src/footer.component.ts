import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '@library/services';
import { RemoteConfig, getString } from '@angular/fire/remote-config';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  remoteConfig = inject(RemoteConfig);

  get configTitle() {
    return getString(this.remoteConfig, 'Title');
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }
  logout() {
    this.authService.logout();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export type AuthMode = 'login' | 'register' | 'forgot';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  mode: AuthMode = 'login';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      switch (params['type'] as AuthMode) {
        case 'register':
          this.mode = 'register';
          break;
        case 'forgot':
          this.mode = 'forgot';
          break;
        default:
          this.mode = 'login';
          break;
      }
    });
  }

  ngOnInit(): void {}
  buttonToogle = false;
  toggle() {
    this.buttonToogle = !this.buttonToogle;
  }
}

import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { admin } from '@core/authentication/user';
import { LoginService } from '@core/authentication/login.service';

/**
 * You should delete this file in the real APP.
 */
@Injectable()
export class FakeLoginService extends LoginService {
  private token = { access_token: 'MW56YjMyOUAxNjMuY29tWm9uZ2Jpbg==', token_type: 'bearer' };

  login() {
    return of(this.token);
  }

  refresh() {
    return of(this.token);
  }

  logout() {
    return of({});
  }

  me() {
    return of(admin);
  }

  menu() {
    return this.http.get('assets/data/menu.json?_t=' + Date.now());
  }
}

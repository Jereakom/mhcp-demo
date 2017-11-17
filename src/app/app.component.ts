import { Component } from '@angular/core';

import { AuthService, SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService) { }

  private user: SocialUser;
  private loggedIn: boolean;

  loginStatus() {
    console.log(this.user);
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  title = 'Healthmatch';
  search = 'Search';
  about = 'About us';
  legal = 'Legal Mumbo Jumbo';
  login = 'Login';
  professionals = 'Professionals';

  title_fi = 'Hoitotori';
  search_fi = 'haku';
  about_fi = 'Tietoa';
  legal_fi = 'Lailliset tiedot';
  login_fi = 'Kirjaudu'
  professionals_fi = 'Ammattilaiset';

}

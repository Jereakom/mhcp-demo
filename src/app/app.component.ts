import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'FindProf';
  search = 'Search';
  about = 'About us';
  legal = 'Legal Mumbo Jumbo';
  login = 'Login';

  title_fi = 'Löydä Lääkäri';
  search_fi = 'haku';
  about_fi = 'Tietoa';
  legal_fi = 'Lailliset tiedot';
  login_fi = 'Kirjaudu'

}

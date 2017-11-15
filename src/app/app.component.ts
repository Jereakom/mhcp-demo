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

}

export class FinnComponent {
  title = 'Löydä Lääkäri';
  search = 'haku';
  about = 'Tietoa';
  legal = 'Lailliset tiedot';

}

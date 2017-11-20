import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { LoginComponent } from './login/login.component';

import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { FacebookLoginProvider } from "angular4-social-login";
import { MatDatepickerModule, MatNativeDateModule, MatInputModule  } from '@angular/material';
import { ProfessionalViewComponent } from './professional-view/professional-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

let config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1513200888773244")
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    LoginComponent,
    ProfessionalViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    SocialLoginModule.initialize(config),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

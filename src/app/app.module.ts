import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, FinnComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { MatDatepickerModule, MatNativeDateModule, MatInputModule  } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

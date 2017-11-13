import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  { path: 'search', component: SearchPageComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}

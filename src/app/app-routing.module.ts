import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchPageComponent } from './search-page/search-page.component';
import { LoginComponent } from './login/login.component';
import { ProfessionalViewComponent} from './professional-view/professional-view.component';

const routes: Routes = [
  { path: 'search', component: SearchPageComponent },
  { path: 'professionals', component: ProfessionalViewComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full'},
  { path: '**', redirectTo: '/search', pathMatch: 'full'},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}

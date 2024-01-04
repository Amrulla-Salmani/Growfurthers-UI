import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { SearchComponent } from './components/search/search.component';
import { AuthGuard } from './services/auth.guard';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'home',
    component: AppComponent,
  },
  {
    path: 'hotels',
    component: HotelsComponent,
  },
  {
    path: 'contactUs',
    component: ContactUsComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: SignUpComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

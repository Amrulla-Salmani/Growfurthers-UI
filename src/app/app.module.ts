import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedDataService } from './services/shared-data.service';
import { LoginComponent } from './components/login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ContactUsComponent,
    HotelsComponent,
    SearchComponent,
    LoginComponent,
    SignUpComponent,
    BookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatRippleModule,
    MatChipsModule,
    MatListModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [
    AuthService,
    SharedDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

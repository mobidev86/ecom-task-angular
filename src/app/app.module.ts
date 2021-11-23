import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { OfferComponent } from './offer';
import { SingleOfferComponent } from './offer';
import { OrderComponent } from './order';
import { CartComponent } from './cart';
import { DatepickerModule } from 'ng2-datepicker';

@NgModule({
  imports: [
    BrowserModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatNativeDateModule,
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    OfferComponent,
    SingleOfferComponent,
    OrderComponent,
    CartComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

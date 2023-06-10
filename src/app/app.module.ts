import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// libraries modules
import { NgxSpinnerModule } from "ngx-spinner";

// interceptors
import { RequestInterceptor } from './shared/interceptors/RequestInterceptor';

//components
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner/loading-spinner.component';
import { NavbarComponent } from './shared/components/loading-spinner/navbar/navbar.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    NgxSpinnerModule,
    MatSelectModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }

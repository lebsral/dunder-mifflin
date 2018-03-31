import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpModule } from '@angular/http';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ProfileComponent } from './profile/profile.component';
import { DataShareService } from './data-share.service';

@NgModule({
  declarations: [AppComponent, AuthenticationComponent, ProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [DataShareService],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}

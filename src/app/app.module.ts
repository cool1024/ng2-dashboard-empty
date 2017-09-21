import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/*ngx-toastr module*/
import { ToastrModule } from 'ngx-toastr';

/*ng-bootstrap*/
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

/*routing module*/
import { AppRoutingModule } from './app.routing';

/*system module*/
import { SystemModule } from './../dashboard/system.module';

/*public system service*/
import { SystemService } from './../dashboard/system.service';
import { SessionService } from './../dashboard/services/session.service';
import { LocalService } from './../dashboard/services/local.service';
import { StorageService } from './../dashboard/services/storage.service';
import { RequestService } from './../dashboard/services/request.service';
import { AuthService } from './../dashboard/services/auth.service';

/*global interceptors*/
import { ErrorCheckInterceptor } from './../dashboard/interceptors/ErrorCheckInterceptor';
import { HeaderInterceptor } from './../dashboard/interceptors/HeaderInterceptor';

/*app component*/
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    /*angular modules*/
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,

    /*ngx-toastr module*/
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right', progressBar: true }),

    /*ng-bootstrap*/
    NgbModalModule.forRoot(),

    /*app routing*/
    AppRoutingModule,

    //system module must the end
    SystemModule,
  ],
  providers: [
    /*public system service*/
    SystemService,
    SessionService,
    LocalService,
    StorageService,
    RequestService,
    AuthService,

    /*public interceptor*/
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorCheckInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

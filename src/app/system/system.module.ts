import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdInputModule, MdMenuModule } from '@angular/material';
import { SystemRoutingModule } from './system.routing';

/*ng-bootstrap*/
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

/*default components & pages*/
import { MenuComponent } from './components/menu/menu.component';
import { HeadbarComponent } from './components/headbar/headbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { AccountSettingComponent } from './modals/account-setting/account-setting.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,

    /*material module*/
    MdButtonModule,
    MdInputModule,
    MdMenuModule,

    /*system module*/
    SystemRoutingModule,

  ],
  declarations: [
    HomeComponent,
    MenuComponent,
    HeadbarComponent,
    LoginComponent,
    Error404Component,
    AccountSettingComponent,
  ],
  entryComponents: [
    AccountSettingComponent,
  ],
  exports: [MenuComponent, HeadbarComponent, LoginComponent]
})
export class SystemModule { }

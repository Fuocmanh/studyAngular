import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './client/pages/login/login.component';
import {HomeComponent} from './client/pages/home/home.component';
import {InputComponent} from './client/component/input/input.component';
import {ButtonComponent} from './client/component/button/button.component';
import {HeaderComponent} from './client/shared/header/header.component';
import {RegisterComponent} from './client/pages/register/register.component';
import {AdminHomeComponent} from './admin/pages/admin-home/admin-home.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import {EditComponent} from "./admin/pages/admin-home/edit/edit.component";
import {IndexComponent} from "./admin/pages/admin-home/index/index.component";
import {CreateComponent} from "./admin/pages/admin-home/create/create.component";
import {ShowComponent} from "./admin/pages/admin-home/show/show.component";
import {CommonModule} from "@angular/common";
import {AdminRoutingModule} from "./admin/pages/admin-home/admin-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EditComponent,
    IndexComponent,
    CreateComponent,
    ShowComponent,
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    RegisterComponent,
    AdminHomeComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  exports: [
    InputComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

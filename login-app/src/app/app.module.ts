import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ListComponent } from './component/list/list.component';
import { DasboardComponent } from './component/dasboard/dasboard.component';
import { MenuComponent } from './component/menu/menu.component';
import { EditComponent } from './component/edit/edit.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    DasboardComponent,
    MenuComponent,
    EditComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

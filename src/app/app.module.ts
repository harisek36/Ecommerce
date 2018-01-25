import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

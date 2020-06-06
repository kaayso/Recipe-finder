import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UserModule} from './user/user.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SignupComponent } from './signup/signup.component';
import {LoginComponent} from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeService } from './services/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeComponent,
    SignupComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, UserModule, HttpClientModule],
  providers: [RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}

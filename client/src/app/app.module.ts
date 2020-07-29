import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { IngredientCardComponent } from './components/ingredient-card/ingredient-card.component';
import { SearchRecipeComponent } from './components/search-recipe/search-recipe.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { IngredientDetailsComponent } from './components/ingredient-details/ingredient-details.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorInterceptor } from './interceptors/auth-interceptor.interceptor';

import { GenericService } from './services/generic.service';
import { CookiesService } from './services/cookies.service';
import { AuthService } from './services/auth.service';
import { AesEncryptDecryptService } from './services/aes-encrypt-decrypt.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    IngredientCardComponent,
    SearchRecipeComponent,
    AddRecipeComponent,
    LoginFormComponent,
    SignupFormComponent,
    IngredientDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NzButtonModule,
    NzGridModule,
    NzDropDownModule,
    NzIconModule,
    NzToolTipModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzNotificationModule,
    NzStepsModule,
    NzDividerModule,
    NzSpinModule,
    NzAvatarModule,
    NzCardModule,
    NzTagModule,
  ],
  providers: [
    GenericService,
    CookiesService,
    AuthService,
    AesEncryptDecryptService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
    { provide: NZ_I18N, useValue: fr_FR },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

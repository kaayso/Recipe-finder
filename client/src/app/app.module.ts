import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

// components
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
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { AddRecipeFormComponent } from './components/add-recipe-form/add-recipe-form.component';
import { VirtualScrollComponentComponent } from './components/virtual-scroll-component/virtual-scroll-component.component';

// interceptor
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorInterceptor } from './interceptors/auth-interceptor.interceptor';

// services
import { GenericService } from './services/generic.service';
import { CookiesService } from './services/cookies.service';
import { AuthService } from './services/auth.service';
import { AesEncryptDecryptService } from './services/aes-encrypt-decrypt.service';
import { UserResourceService } from './services/user-resource.service';
import { UploadService } from './services/upload.service';

// utils
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';

// UI modules
import { FormsModule } from '@angular/forms';
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
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

// env
import { environment } from 'src/environments/environment';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { SetRecipeComponent } from './components/set-recipe/set-recipe.component';

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
    RecipeCardComponent,
    IngredientsComponent,
    RecipesComponent,
    AddRecipeFormComponent,
    VirtualScrollComponentComponent,
    BackButtonComponent,
    SetRecipeComponent,
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
    NzDrawerModule,
    NzBadgeModule,
    NzModalModule,
    NzSelectModule,
    NzUploadModule,
    NzMessageModule,
    NzTableModule,
    NzPopconfirmModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NzCarouselModule,
  ],
  providers: [
    GenericService,
    CookiesService,
    AuthService,
    AesEncryptDecryptService,
    UserResourceService,
    UploadService,
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { SearchRecipeComponent } from './components/search-recipe/search-recipe.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { AccessGuardGuard } from './guards/access-guard.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AccessGuardGuard],
  },
  {
    path: 'add-recipe',
    component: AddRecipeComponent,
    canActivate: [AccessGuardGuard],
  },
  {
    path: 'search-recipe',
    component: SearchRecipeComponent,
    canActivate: [AccessGuardGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeComponent } from './components/recipe/recipe.component';
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
    path: 'recipe',
    component: RecipeComponent,
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

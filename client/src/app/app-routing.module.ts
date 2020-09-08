import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchRecipeComponent } from './components/search-recipe/search-recipe.component';
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
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [AccessGuardGuard],
  },
  {
    path: 'ingredients',
    component: IngredientsComponent,
    canActivate: [AccessGuardGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'recipes/search',
    component: SearchRecipeComponent,
    canActivate: [AccessGuardGuard],
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

import { Component } from '@angular/core';
import { RecipeService } from './services/recipe.service';
import { Recipe } from './interfaces/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private recipeService: RecipeService) {}
  recipes: Recipe[];
  dateVal = new Date();
  loading: boolean = true;

  ngOnInit() {
    this.getRecipes();
  }

  async getRecipes() {
    this.recipes = await this.recipeService.getRecipes();
    this.loading = false;
  }
}

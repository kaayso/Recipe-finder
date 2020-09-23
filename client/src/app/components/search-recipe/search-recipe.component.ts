import { Component, OnInit } from '@angular/core';
import { UserResourceService } from 'src/app/services/user-resource.service';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { Router } from '@angular/router';
import { api } from 'src/app/ws/api';
import { GenericService } from 'src/app/services/generic.service';
import { Recipe } from 'src/app/interfaces/recipe';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.scss'],
})
export class SearchRecipeComponent implements OnInit {
  isVisible: boolean = false;
  searchAgain: boolean = false;
  userIngredients: Ingredient[];
  recipesFound: Recipe[];

  constructor(
    private userResourceService: UserResourceService,
    private router: Router,
    private genericService: GenericService
  ) {
    this.userIngredients = this.userResourceService.getUserIngredients();
  }

  ngOnInit(): void {
    if (!this.userIngredients) {
      this.router.navigateByUrl('/ingredients');
    }
    this.getRecipes();
  }

  private getRecipes(): void {
    const payload = { userIngredients: this.userIngredients };
    this.genericService.post(api.SearchRecipe, payload).subscribe(
      (res) => {
        this.recipesFound = res.userIngredients;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  close(): void {
    this.isVisible = false;
    if (this.userIngredients.length === 0) {
      this.router.navigateByUrl('/ingredients');
    }
    if (this.searchAgain) {
      this.getRecipes();
      this.searchAgain = false;
    }
  }

  open(): void {
    this.isVisible = true;
  }

  onCloseTag(event: Event, name): void {
    event.preventDefault();
    this.userIngredients = this.userIngredients.filter(
      (ing) => ing.name !== name
    );
    this.searchAgain = true;
  }
}

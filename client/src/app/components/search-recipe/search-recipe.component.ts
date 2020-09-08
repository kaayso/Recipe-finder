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
}

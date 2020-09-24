import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
import { api } from 'src/app/ws/api';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { UserResourceService } from 'src/app/services/user-resource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit {
  ingredients: any = {};
  loadedItems: any = {};
  userIngredients: Ingredient[] = [];
  optionsDisabled: boolean = true;
  array = [1, 2, 3];

  constructor(
    private genericService: GenericService,
    private userResourceService: UserResourceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.genericService.get(api.Ingredient).subscribe(
      (res) => {
        this.ingredients = this._groupByCategory(res);
      },
      (err) => console.error(err)
    );
  }

  private _groupByCategory(ingredientList: Ingredient[]): Object {
    const result = {};
    for (let ing of ingredientList) {
      if (result[ing.category] == undefined) {
        result[ing.category] = [];
      }
      result[ing.category].push(ing);
    }
    return result;
  }

  getIngredientByCategory(name: string): void {
    if (!this.loadedItems[name]) {
      this.loadedItems[name] = this.ingredients[name];
    }
  }

  selectedItems(data: any): void {
    this.userIngredients = this.userIngredients
      .filter((ing) => ing.category !== data.category)
      .concat(data.ingredients);

    // disable controllers if no ingredients
    this.optionsDisabled = !(this.userIngredients.length > 0);
  }

  searchRecipes(): void {
    this.userResourceService.setUserIngredients(this.userIngredients);
    this.router.navigateByUrl('recipes/search');
  }
}

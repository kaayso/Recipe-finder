import { Component, OnInit } from '@angular/core';
import { GenericService } from '../../services/generic.service';
import { api } from '../../ws/api';
import { Ingredient } from 'src/app/interfaces/ingredient';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.scss'],
})
export class SearchRecipeComponent implements OnInit {
  ingredients: any = {};
  userIngredients: Ingredient[] = [];
  constructor(private genericService: GenericService) {}

  ngOnInit(): void {
    this.genericService.get(api.Ingredient).subscribe(
      (res) => {
        this.ingredients = this.groupByCategory(res.data);
      },
      (err) => console.error(err)
    );
  }

  groupByCategory(ingredientList: Ingredient[]): Object {
    const result = {};
    for (let ing of ingredientList) {
      if (result[ing.category] == undefined) {
        result[ing.category] = [];
      }
      result[ing.category].push(ing);
    }
    return result;
  }

  selectedItems(selectedIngredients: Ingredient[]): void {
    if (selectedIngredients.length === 0) return;
    const category = selectedIngredients[0].category;
    this.userIngredients = this.userIngredients
      .filter((ing) => ing.category !== category)
      .concat(selectedIngredients);
  }
}

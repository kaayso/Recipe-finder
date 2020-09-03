import { Component, OnInit } from '@angular/core';
import { GenericService } from '../../services/generic.service';
import { api } from '../../ws/api';
import { Ingredient } from 'src/app/interfaces/ingredient';

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
  constructor(private genericService: GenericService) {}

  ngOnInit(): void {
    this.genericService.get(api.Ingredient).subscribe(
      (res) => {
        this.ingredients = this.groupByCategory(res.data);
      },
      (err) => console.error(err)
    );
  }

  private groupByCategory(ingredientList: Ingredient[]): Object {
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
}

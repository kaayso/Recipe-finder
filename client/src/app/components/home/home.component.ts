import { Component, OnInit, OnDestroy } from '@angular/core';
import { GenericService } from '../../services/generic.service';
import { Ingredient } from '../../interfaces/ingredient';
import { api } from '../../ws/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ingredients: any[];
  loading: boolean = true;

  constructor(private webService: GenericService) {}
  name = 'toto';
  ngOnInit() {
    this.getIngredients();
  }

  getIngredients() {
    this.webService.get(api.Ingredient).subscribe(
      () => {
        this.loading = false;
        this.ingredients = this.formatIngredientToCat([
          {
            category: 'a',
            n: 2,
          },
          {
            category: 'b',
            n: 21,
          },
          {
            category: 'a',
            n: 5,
          },
        ]);
        console.log(this.ingredients);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  formatIngredientToCat(ingredientList) {
    const catIndex = {};
    const result = [];
    for (let ing of ingredientList) {
      if (catIndex[ing.category] == undefined) {
        catIndex[ing.category] = ingredientList.indexOf(ing);
        result.push([{ category: ing.category }, []]);
      }
      result[catIndex[ing.category]][1].push(ing);
    }
    return result;
  }
}

import { Component, OnInit } from '@angular/core';
import { GenericService } from '../../services/generic.service';
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
  ngOnInit() {
    this.getIngredients();
  }

  getIngredients() {
    this.webService.get(api.Ingredient).subscribe(
      () => {
        this.loading = false;
        this.ingredients = this.formatIngredientToCategory([
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
          {
            category: 'c',
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

  formatIngredientToCategory(ingredientList) {
    const catVisited = {};
    const result = [];
    for (let ing of ingredientList) {
      if (catVisited[ing.category] == undefined) {
        catVisited[ing.category] = true;
        result.push([{ category: ing.category }, []]);
      }
      result.find((item) => {
        if (item[0].category == ing.category) {
          item[1].push(ing);
        }
      });
    }
    return result;
  }
}

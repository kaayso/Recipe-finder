import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/interfaces/ingredient';

@Injectable({
  providedIn: 'root',
})
export class UserResourceService {
  private userIngredients: Ingredient[];
  constructor() {}

  setUserIngredients(ings: Ingredient[]): void {
    this.userIngredients = ings;
  }

  getUserIngredients(): Ingredient[] {
    return this.userIngredients;
  }
}

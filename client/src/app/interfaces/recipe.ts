import { Ingredient } from './ingredient';

export interface Recipe {
  _id: string;
  uid: string;
  name: string;
  image: string;
  ingredients: Array<Ingredient>;
}

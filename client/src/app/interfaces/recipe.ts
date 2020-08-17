import { Ingredient } from './ingredient';
import { Quantity } from './quantity';

export interface Recipe {
  _id: string;
  uid: string;
  name: string;
  image: string;
  persons: number;
  category: string;
  description: string;
  ingredients: Array<Ingredient>;
  time: Quantity;
  default?: boolean;
}

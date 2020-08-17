import { Quantity } from './quantity';

export interface Ingredient {
  name: string;
  category?: string;
  quantity?: Quantity;
}

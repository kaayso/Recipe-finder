import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../interfaces/ingredient';
import { Quantity } from '../../interfaces/quantity';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input() name: string;
  @Input() image: string;
  @Input() category: string;
  @Input() time: Quantity;
  @Input() description: string;
  @Input() persons: number;
  @Input() default: boolean;
  @Input() ingredients: Ingredient[];

  visible: Boolean = false;

  constructor() {}
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  getName(): string {
    if (this.name.length > 35) return this.name.slice(0, 35) + ' ...';
    return this.name;
  }
  ngOnInit(): void {}
}

import { Component, OnInit, Input } from '@angular/core';
import { GenericService } from '../../services/generic.service';
import { api } from '../../ws/api';
import { Ingredient } from '../../interfaces/ingredient';

@Component({
  selector: 'app-ingredient-card',
  templateUrl: './ingredient-card.component.html',
  styleUrls: ['./ingredient-card.component.scss'],
})
export class IngredientCardComponent implements OnInit {
  @Input() img: string;
  @Input() title: string;
  @Input() description: string;
  visible = false;
  ingredients: Ingredient[] = [];
  pickedIngredients: Ingredient[] = [];

  constructor(private webService: GenericService) {}

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  checkChange(e: boolean, name: string): void {
    const newIngredient = {
      category: this.title,
      name,
      quantity: {
        type: { unity: null, value: null },
      },
    };
    const isPresent = this.pickedIngredients.some(
      (ing) => ing.name === newIngredient.name
    );

    if (isPresent) {
      this.pickedIngredients = this.pickedIngredients.filter(
        (ing) => ing.name !== newIngredient.name
      );
    } else {
      this.pickedIngredients.push(newIngredient);
    }
  }

  ngOnInit(): void {
    this.webService.get(`${api.Ingredient}category/${this.title}`).subscribe(
      (res) => {
        this.ingredients = res.sort((a, b) => a.name.localeCompare(b.name));
      },
      (err) => {
        console.error(err);
      }
    );
  }
}

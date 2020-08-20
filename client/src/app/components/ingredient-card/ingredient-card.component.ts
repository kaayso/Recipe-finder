import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  SimpleChanges,
} from '@angular/core';
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
  @Input() items: Ingredient[];
  @Output() selectedItems: EventEmitter<any> = new EventEmitter();
  @Output() getIngredientByCategory: EventEmitter<any> = new EventEmitter();

  visible: Boolean = false;
  rawIngredients: Ingredient[] = [];
  pickedIngredients: Ingredient[] = [];
  inputSearch: string = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "items" changed
    if (changes['items']) {
      this.rawIngredients = this.items;
    }
  }

  open(): void {
    this.getIngredientByCategory.emit(this.title);
    this.visible = true;
  }

  close(): void {
    this.visible = false;
    this.selectedItems.emit(this.pickedIngredients);
  }

  pickIngredient(name: string): void {
    const isPresent = this.pickedIngredients.some((ing) => ing.name === name);

    if (isPresent) {
      this.pickedIngredients = this.pickedIngredients.filter(
        (ing) => ing.name !== name
      );
    } else {
      this.pickedIngredients.push({
        category: this.title,
        name,
      });
    }
  }

  isChecked(name: string): boolean {
    return this.pickedIngredients.some((ing) => ing.name === name);
  }

  onChangeSearch(value: string): void {
    this.inputSearch = value;
    this.items = this.rawIngredients.filter((ing) =>
      ing.name.toLowerCase().includes(value.toLowerCase())
    );
  }

  ngOnInit(): void {}
}

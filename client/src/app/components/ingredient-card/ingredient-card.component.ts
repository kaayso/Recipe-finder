import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Ingredient } from 'src/app/interfaces/ingredient';

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

  isVisible: boolean = false;
  rawIngredients: Ingredient[] = [];
  pickedIngredients: Ingredient[] = [];
  inputSearch: string = '';
  loading: boolean = true;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "items" changed
    if (changes['items']) {
      if (this.items && this.items.length > 0) {
        this.rawIngredients = this.items;
        this.loading = false;
      }
    }
  }

  open(): void {
    // load ingredients and open modal
    setTimeout(() => {
      this.getIngredientByCategory.emit(this.title);
    }, 400);
    this.isVisible = true;
  }

  close(): void {
    this.isVisible = false;
    this.selectedItems.emit({
      ingredients: this.pickedIngredients,
      category: this.title,
    });
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

  clearInputSearch(): void {
    this.inputSearch = '';
    this.items = this.rawIngredients;
  }

  ngOnInit(): void {}
}

import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { Quantity } from 'src/app/interfaces/quantity';
import { GenericService } from 'src/app/services/generic.service';
import { api } from 'src/app/ws/api';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  showRecipeSetter: boolean = false;
  @Input() _id: string;
  @Input() name: string;
  @Input() image: string;
  @Input() category: string;
  @Input() time: Quantity;
  @Input() description: string;
  @Input() persons: number;
  @Input() default: boolean;
  @Input() ingredients: Ingredient[];
  visible: boolean = false;

  constructor(private genericService: GenericService) {}

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

  getDescription(): string {
    if (this.description.length > 220)
      return this.description.slice(0, 220) + ' ...';
    return this.description;
  }

  editRecipe(): void {
    this.showRecipeSetter = true;
  }

  setVisibility(visibility): void {
    this.showRecipeSetter = visibility;
  }

  deleteRecipe(): void {
    this.genericService.delete(`${api.Recipe}${this._id}`).subscribe(
      (res) => {
        console.log(res);
        window.location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {}
}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingredient-card',
  templateUrl: './ingredient-card.component.html',
  styleUrls: ['./ingredient-card.component.scss'],
})
export class IngredientCardComponent implements OnInit {
  constructor(private router: Router) {}
  @Input() img: string;
  @Input() title: string;
  @Input() description: string;

  ngOnInit(): void {}

  goToIngredientDetails(): void {
    this.router.navigate(['/search-recipe/category', { value: this.title }]);
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ingredient-card',
  templateUrl: './ingredient-card.component.html',
  styleUrls: ['./ingredient-card.component.scss'],
})
export class IngredientCardComponent implements OnInit {
  constructor() {}
  @Input() img: string;
  @Input() title: string;
  @Input() description: string;

  ngOnInit(): void {}
}

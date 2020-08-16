import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input() name: string;
  @Input() image: string;
  @Input() category: string;
  @Input() time: string;
  @Input() description: string;
  @Input() ingredients: string[];

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

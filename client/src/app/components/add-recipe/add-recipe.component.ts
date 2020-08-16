import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
  ings: string[] = ['1kg de sardine', '300g de tomates', '1 salade'];
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
import { api } from 'src/app/ws/api';
import { Recipe } from 'src/app/interfaces/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(private genericService: GenericService) {}

  ngOnInit(): void {
    this.genericService.get(api.Recipe).subscribe(
      (res) => {
        this.recipes = res.data;
      },
      (err) => console.error(err)
    );
  }
}

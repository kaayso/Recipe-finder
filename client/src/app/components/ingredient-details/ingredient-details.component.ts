import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenericService } from '../../services/generic.service';
import { api } from '../../ws/api';
import { Ingredient } from '../../interfaces/ingredient';

@Component({
  selector: 'app-ingredient-details',
  templateUrl: './ingredient-details.component.html',
  styleUrls: ['./ingredient-details.component.scss'],
})
export class IngredientDetailsComponent implements OnInit {
  category: string;
  ingredients: Ingredient[];
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private webService: GenericService
  ) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('value');
    this.webService.get(`${api.Ingredient}category/${this.category}`).subscribe(
      (res) => {
        this.ingredients = res;
        this.loading = false;
      },
      (err) => {
        console.error(err);
      }
    );
  }
}

import { Component } from '@angular/core';
import { GenericService } from './services/generic.service';
import { Recipe } from './interfaces/recipe';
import { api } from './ws/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  recipes: Recipe[];
  loading: boolean = true;

  constructor(private webService: GenericService) {}

  ngOnInit() {
    // this.getRecipes();
  }

  getRecipes() {
    const ep = `${api.Recipe}`;
    this.webService.get(ep).subscribe(
      (res) => {
        if (res) this.loading = false;
        this.recipes = res.data;
      },
      (err) => {
        console.error(err);
      }
    );
  }
}

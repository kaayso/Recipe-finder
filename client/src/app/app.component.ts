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
  constructor(private webService: GenericService) {}
  recipes: Recipe[];
  dateVal = new Date();
  loading: boolean = true;

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    const ep = `${api.Recipe}`;
    this.webService.get(ep).subscribe(
      (res) => {
        if (res) this.loading = false;
        this.recipes = res.data;
      },
      (err) => {
        console.log(err.status);
      }
    );
  }
}

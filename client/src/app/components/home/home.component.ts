import { Component, OnInit } from '@angular/core';
import { GenericService } from '../../services/generic.service';
import { api } from '../../ws/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
  goToRecipes(): void {
    this.router.navigateByUrl('/add-recipe');
  }
  goToIngredients(): void {
    this.router.navigateByUrl('/search-recipe');
  }
}

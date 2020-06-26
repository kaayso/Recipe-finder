import { Component } from '@angular/core';
import { GenericService } from './services/generic.service';
import { AuthService } from './services/auth.service';
import { Recipe } from './interfaces/recipe';
import { api } from './ws/api';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  recipes: Recipe[];
  loading: boolean = true;
  subscription: Subscription;

  constructor(
    private webService: GenericService,
    private authService: AuthService,
    private router: Router
  ) {
    // this.subscription = this.authService.getUserConnectionState().subscribe(isConnected => {
    //   console.log(isConnected)
    //   if (!isConnected) {
    //     // redirect to root
    //     this.router.navigateByUrl('/');
    //   }
    // })
  }

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

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit, OnDestroy {
  connexionSubscription: Subscription;
  usernameSubscription: Subscription;
  showMenu: boolean;
  displayToolBar: boolean = false;
  usernameFirstLetter: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {
    this.connexionSubscription = this.authService
      .isUserConnected()
      .subscribe((response) => (this.showMenu = response));
    this.usernameSubscription = this.authService
      .getUsername()
      .subscribe((response) => {
        return (this.usernameFirstLetter = response.split('')[0]);
      });

    this.location.onUrlChange((path) => {
      path == '/'
        ? (this.displayToolBar = false)
        : (this.displayToolBar = true);
    });
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) this.showMenu = true;
    this.usernameFirstLetter = this.authService
      .getUserCredential('username')
      ?.split('')[0];
  }

  logout(): void {
    this.authService
      .logout()
      .subscribe(() => this.router.navigateByUrl('/login'));
  }

  goHome(): void {
    this.router.navigateByUrl('/');
  }

  goToRecipes(): void {
    this.router.navigateByUrl('/recipes');
  }

  goToIngredients(): void {
    this.router.navigateByUrl('/ingredients');
  }

  ngOnDestroy() {
    this.connexionSubscription.unsubscribe();
    this.usernameSubscription.unsubscribe();
  }
}

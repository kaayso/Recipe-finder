import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { api } from '../../ws/api';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  showMenu: boolean;
  displayToolBar: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {
    // show menu in dynamic way
    this.subscription = this.authService
      .isUserConnected()
      .subscribe((response) => (this.showMenu = response));
    this.location.onUrlChange((path) => {
      path == '/'
        ? (this.displayToolBar = false)
        : (this.displayToolBar = true);
    });
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) this.showMenu = true;
  }

  logout(): void {
    this.authService
      .logout(api.Logout)
      .subscribe(() => this.router.navigateByUrl('/login'));
  }

  goHome(): void {
    console.log('home');

    this.router.navigateByUrl('/');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

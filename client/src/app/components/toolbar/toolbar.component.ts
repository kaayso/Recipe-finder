import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { api } from '../../ws/api';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  showMenu: boolean;
  constructor(private authService: AuthService, private router: Router) {
    // show menu in dynamic way
    this.subscription = this.authService
      .isUserConnected()
      .subscribe((response) => (this.showMenu = response));
  }

  ngOnInit(): void {
    // on loading page
    if (this.authService.isLoggedIn()) this.showMenu = true;
  }
  logout() {
    this.authService.logout(api.Logout).subscribe(
      () => this.router.navigateByUrl('/login'),
      () => this.router.navigateByUrl('/login')
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

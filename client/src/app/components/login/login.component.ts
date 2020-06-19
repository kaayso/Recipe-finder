import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { GenericService } from '../../services/generic.service';
import { Subscription } from 'rxjs';
import { api } from '../../ws/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  
  constructor(private router: Router, private authService: AuthService, private genericService: GenericService) {
    this.subscription = this.authService.getUserId().subscribe(uid =>{
      if (uid) {
        this.router.navigateByUrl('/home');
      }
    });
  }

  ngOnInit(): void {
  }
  
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

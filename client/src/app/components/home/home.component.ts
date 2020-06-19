import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { GenericService } from '../../services/generic.service';
import { Subscription } from 'rxjs';
import { api } from '../../ws/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  uid: string = '';

  constructor(private router: Router, private authService: AuthService, private genericService: GenericService) {
    this.subscription = this.authService.getUserId().subscribe(uid =>{
      if (uid) {
        console.log(uid)
        this.uid = uid;
      }
    });
  }

  ngOnInit(): void {
    console.log(`${api.User}${this.uid}`);
    
    this.genericService.get(`${api.User}${this.uid}`).subscribe(
      (res) => {
        console.log(res);
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

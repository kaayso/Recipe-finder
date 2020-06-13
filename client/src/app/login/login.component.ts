import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  onSubmit(data) {
    if (data.token && data.refreshToken) {
      // localStorage.token = data.token;
      // localStorage.refreshToken = data.refreshToken;
      this.router.navigateByUrl('/home');
    }
  }
}

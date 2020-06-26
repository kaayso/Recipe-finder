import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { api } from '../../../ws/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  profileForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  get username() {
    return this.profileForm.get('username');
  }
  get password() {
    return this.profileForm.get('password');
  }

  submit() {
    if (this.username.invalid || this.password.invalid) {
      alert('username or password is incorrect');
    } else {
      // send HTTP request
      this.authService
        .login(api.Login, this.profileForm.value)
        .subscribe((res) => {
          // setup cookie & go to home page
          console.log('user connected');
          this.router.navigateByUrl('/');
        });
    }
  }
}

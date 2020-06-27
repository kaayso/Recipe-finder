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
      alert('Please enter your username and password');
    } else {
      // send HTTP request
      this.authService
        .login(api.Login, this.profileForm.value)
        .subscribe((response) => {
          if (response) {
            this.router.navigateByUrl('/');
          } else {
            alert('Your username or password is incorrect');
          }
        });
    }
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { api } from '../../ws/api';
import { CookiesService } from '../../services/cookies.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private cookiesService: CookiesService
  ) {}

  ngOnInit(): void {}

  showError: boolean = false;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

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
      this.showError = true;
    } else {
      // send HTTP request
      this.authService.login(api.Login, this.profileForm.value).subscribe(
        (res) => {
          // setup cookie & go to home page
          this.cookiesService.setCookie('token', res.token);
          this.cookiesService.setCookie('refreshToken', res.refreshToken);
          this.onSubmit.emit(res.uid);
        },
        (err) => {
          this.showError = true;
        }
      );
    }
  }
}

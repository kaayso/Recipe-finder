import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { api } from '../../ws/api';
import { Router } from '@angular/router';
import { AesEncryptDecryptService } from '../../services/aes-encrypt-decrypt.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  validateForm!: FormGroup;
  LSUsername: string;
  LSPassword: string;

  createNotification(type: string, title: string, content: string): void {
    this.notification.create(type, title, content);
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const username = this.validateForm.value.username;
    const password = this.validateForm.value.password;
    if (username && password) {
      // send HTTP request
      this.authService
        .login(api.Login, this.validateForm.value)
        .subscribe((response) => {
          if (response) {
            this.router.navigateByUrl('/');
          } else {
            this.createNotification(
              'error',
              'Connexion échouée!',
              'Pseudo ou mot de passe incorect, veuillez réessayer.'
            );
          }
        });
      if (this.validateForm.value.remember) {
        this.authService.saveUserCredentials({
          username,
          password: this.aesEncryptDecryptService.encrypt(password),
        });
      } else {
        this.authService.removeUserCredentials();
      }
    }
  }

  constructor(
    private notification: NzNotificationService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private aesEncryptDecryptService: AesEncryptDecryptService
  ) {}

  ngOnInit(): void {
    const localStorageUsername = localStorage.getItem('username')
      ? localStorage.getItem('username')
      : null;
    const localStoragePassword = localStorage.getItem('password')
      ? this.aesEncryptDecryptService.decrypt(localStorage.getItem('password'))
      : null;
    this.validateForm = this.fb.group({
      username: [localStorageUsername, [Validators.required]],
      password: [localStoragePassword, [Validators.required]],
      remember: [true],
    });
  }
}

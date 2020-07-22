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
  styleUrls: ['./login-form.component.scss'],
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
    if (this.validateForm.valid) {
      // send HTTP request
      this.authService
        .login(api.Login, this.validateForm.value)
        .subscribe((response) => {
          if (response.ok) {
            // save username
            this.authService.saveUserCredentials([
              {
                key: 'username',
                value: username,
              },
            ]);
            // save password if remember checkbox is enable
            if (this.validateForm.value.remember) {
              this.authService.saveUserCredentials([
                {
                  key: 'password',
                  value: this.aesEncryptDecryptService.encrypt(password),
                },
              ]);
            } else {
              this.authService.removeUserCredentials(['password']);
            }
            this.router.navigateByUrl('/');
          } else if (response.status === 404) {
            this.createNotification(
              'error',
              'Connexion échouée!',
              'Pseudo ou mot de passe incorrect, veuillez réessayer.'
            );
          } else if (response.status === 422) {
            this.createNotification(
              'error',
              'Erreur!',
              "Le formulaire n'est pas valide"
            );
          } else {
            this.createNotification(
              'error',
              'Erreur!',
              'Le serveur ne répond pas.'
            );
          }
        });
    }
  }

  goSignup(): void {
    this.router.navigateByUrl('/signup');
  }

  constructor(
    private notification: NzNotificationService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private aesEncryptDecryptService: AesEncryptDecryptService
  ) {}

  ngOnInit(): void {
    const localStorageUsername = this.authService.getUserCredential('username')
      ? this.authService.getUserCredential('username')
      : null;
    const localStoragePassword = this.authService.getUserCredential('password')
      ? this.aesEncryptDecryptService.decrypt(
          this.authService.getUserCredential('password')
        )
      : null;
    this.validateForm = this.fb.group({
      username: [localStorageUsername, [Validators.required]],
      password: [localStoragePassword, [Validators.required]],
      remember: [true],
    });
  }
}

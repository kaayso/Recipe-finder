import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AesEncryptDecryptService } from 'src/app/services/aes-encrypt-decrypt.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  validateForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private aesEncryptDecryptService: AesEncryptDecryptService,
    private msg: NzMessageService
  ) {}

  ngOnInit(): void {
    const localStorageUsername = this.authService.getUserCredential('username')
      ? this.authService.getUserCredential('username')
      : null;
    const localStoragePassword = this.authService.getUserCredential('sessionId')
      ? this.aesEncryptDecryptService.decrypt(
          this.authService.getUserCredential('sessionId')
        )
      : null;

    this.validateForm = this.fb.group({
      username: [localStorageUsername, [Validators.required]],
      password: [localStoragePassword, [Validators.required]],
      remember: [true],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const username = this.validateForm.value.username;
    const password = this.validateForm.value.password;

    if (this.validateForm.valid) {
      this.loading = true;
      // send HTTP request
      this.authService.login(this.validateForm.value).subscribe((response) => {
        if (response.ok) {
          this.loading = false;
          setTimeout(() => {
            this.msg.success(`Bienvenue ${username} !`, {
              nzDuration: 1800,
            });
          }, 1400);

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
                key: 'sessionId',
                value: this.aesEncryptDecryptService.encrypt(password),
              },
            ]);
          } else {
            this.authService.removeUserCredentials(['sessionId']);
          }
          this.router.navigateByUrl('/');
        } else if (response.status === 404) {
          this.loading = false;
          this.msg.error(
            'Connexion échouée : pseudo ou mot de passe incorrect.'
          );
        } else if (response.status === 422) {
          this.loading = false;
          this.msg.error("Erreur : Le formulaire n'est pas valide.");
        } else {
          this.loading = false;
          this.msg.error('Erreur : Le serveur ne répond pas.');
        }
      });
    }
  }

  goSignup(): void {
    this.router.navigateByUrl('/signup');
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { api } from '../../ws/api';
import { Router } from '@angular/router';
import { AesEncryptDecryptService } from '../../services/aes-encrypt-decrypt.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  current = 0;
  validateForm!: FormGroup;

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [this.emailValidator]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirm: [null, [this.confirmValidator]],
    });
  }

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }

  createNotification(type: string, title: string, content: string): void {
    this.notification.create(type, title, content);
  }

  validateEmail(email): boolean {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  done(): void {
    if (this.validateForm.valid) {
      // all is ok, send request
      const user = this.validateForm.value;
      delete user.confirm;

      this.authService.signup(api.Singup, user).subscribe((response) => {
        if (response) {
          this.authService.saveUserCredentials({
            username: user.username,
            password: this.aesEncryptDecryptService.encrypt(user.password),
          });
          this.router.navigateByUrl('/login');
        } else {
          this.createNotification(
            'error',
            'Erreur!',
            'Cette adresse mail est déjà utilisée.'
          );
          this.current = 0;
        }
      });
    }
  }

  validateconfirm(): void {
    setTimeout(() =>
      this.validateForm.controls.confirm.updateValueAndValidity()
    );
  }

  validateemail(): void {
    setTimeout(() => this.validateForm.controls.email.updateValueAndValidity());
  }

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  emailValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (!this.validateEmail(control.value)) {
      return { email: true, error: true };
    }
    return {};
  };

  constructor(
    // private notification: NzNotificationService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private aesEncryptDecryptService: AesEncryptDecryptService,
    private notification: NzNotificationService
  ) {}
}

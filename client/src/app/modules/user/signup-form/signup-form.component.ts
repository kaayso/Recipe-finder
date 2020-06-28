import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { api } from '../../../ws/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router) {}
  
  profileForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    cpassword: new FormControl('', Validators.required),
  });
  
  ngOnInit(): void {}
  
  get username() {
    return this.profileForm.get('username');
  }
  get email() {
    return this.profileForm.get('email');
  }

  get password() {
    return this.profileForm.get('password');
  }
  get cpassword() {
    return this.profileForm.get('cpassword');
  }
  
  submit() {
    if (this.username.invalid || this.email.invalid || this.password.invalid || this.cpassword.invalid) {
      alert('Please all fields must to be filled');
    } else if (this.password.value !== this.cpassword.value) {
      alert('passwords are not equal');
    } else{
      delete this.profileForm.value.cpassword;
      console.log(this.profileForm.value)
      // send HTTP request
      this.authService
        .signup(api.Singup, this.profileForm.value)
        .subscribe((response) => {
          if (response) {
            this.router.navigateByUrl('/login');
          } else {
            alert('This user alréady exists');
          }
        });
    }
  }
  }
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  showError: boolean = false;
  profileForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  get username () {
    return this.profileForm.get('username')
  }
  get password () {
    return this.profileForm.get('password')
  }
  onSubmit() {
    if (this.username.invalid || this.password.invalid){
      this.showError= true;
    }
    else{
      // check combinaison
      this.showError= false;
    }
    console.log(this.profileForm.value);
  }
}
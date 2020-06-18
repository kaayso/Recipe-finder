import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [LoginFormComponent],
})
export class UserModule {}

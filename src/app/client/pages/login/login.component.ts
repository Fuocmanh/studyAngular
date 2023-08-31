import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.email]]
    });
  }

  get email() {
    return this.myForm.get('email');
  }

  validateEmail() {
    console.log(this.email)
    if (this.email && this.email.errors && this.email.errors["required"]) {
      console.log('Email is required.');
    }
    if (this.email && this.email.errors && this.email.errors["email"]) {
      console.log('Invalid email address.');
    }
  }
}

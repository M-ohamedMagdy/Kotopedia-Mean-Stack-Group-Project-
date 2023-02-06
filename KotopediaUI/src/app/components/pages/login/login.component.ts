import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password : new FormControl('',[Validators.required,Validators.maxLength(12),Validators.minLength(6)])
  })

  get emailValid(){
    return !this.loginForm.controls.email.value ? 'You must enter a value'
    : !this.loginForm.controls['email'].valid ? 'Not a valid email' : '';
  }

  get passwordValid(){
    return !this.loginForm.controls['password'].value ? 'You must enter a value'
    : !this.loginForm.controls['password'].valid ? 'Not a valid password' : '';
  }

}
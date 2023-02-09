import { Component, DoCheck } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements DoCheck {

  passwordsNotEqual:boolean = true;

  file : File|undefined;

  genders: any[] = [{value: 'Male'},{value: 'Female'}];

  constructor( ) { }

  ngDoCheck(): void {
    this.passwordsNotEqual = this.signupForm.controls['confirmationPassword'].value !== this.signupForm.controls['password'].value;
  }

  signupForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.maxLength(20),Validators.minLength(3)]),
    email : new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password : new FormControl('',[Validators.required,Validators.pattern(new RegExp('^[a-zA-Z0-9]{8,16}$'))]),
    confirmationPassword: new FormControl('',[Validators.required,Validators.pattern(new RegExp('^[a-zA-Z0-9]{8,16}$'))]),
    gender: new FormControl('',Validators.required),
    photo: new FormControl('',Validators.requiredTrue)
  })

  get nameNotValid(){
    return !this.signupForm.controls['name'].value ? 'You must enter a value'
     : !this.signupForm.controls['name'].valid ? 'Invalid name format' : '';
  }

  get emailNotValid(){
    return !this.signupForm.controls.email.value ? 'You must enter a value'
    : !this.signupForm.controls['email'].valid ? 'Invalid email format' : '';
  }

  get passwordNotValid(){
    return !this.signupForm.controls['password'].value ? 'You must enter a value'
    : !this.signupForm.controls['password'].valid ? 'Invalid password format, password should be 8 - 16 (lowercase or uppercase)characters or digits' : '';
  }

  get confirmationPasswordNotValid(){
    return !this.signupForm.controls['confirmationPassword'].value ? 'You must enter a value'
    : !this.signupForm.controls['confirmationPassword'].valid ? 'Invalid password format'
    : this.signupForm.controls['confirmationPassword'].value !== this.signupForm.controls['password'].value
    ? 'Please enter the same password' : '';
  }

  getPhoto(event:any) {
    this.file = event.target.files[0];
  }

}

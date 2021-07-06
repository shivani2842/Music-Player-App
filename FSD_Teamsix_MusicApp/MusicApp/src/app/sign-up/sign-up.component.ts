import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../Model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
@Component({ selector: 'app-sign-up',
templateUrl: './sign-up.component.html',
styleUrls: ['./sign-up.component.css'] })
export class SignUpComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    msg:string;
    constructor(private formBuilder: FormBuilder,private userserviceobj:UserService,private router:Router) { }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        }, {
            validator: this.MustMatch('password', 'confirmPassword')
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
      MustMatch(controlName: string, matchingControlName: string) {
      return (formGroup: FormGroup) => {
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];
          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
              // return if another validator has already found an error on the matchingControl
              return;
          }
          // set error on matchingControl if validation fails
          if (control.value !== matchingControl.value) {
              matchingControl.setErrors({ mustMatch: true });
          } else {
              matchingControl.setErrors(null);
          }
      }
  }
    onSubmit()
    {
        this.submitted = true;
        if (this.registerForm.invalid)
        {
            return;
        }
        // console.log("onsubmit is called");
        if(this.registerForm.valid)
        {
            let u=new User();
            u.email=this.registerForm.value.email;
            u.password=this.registerForm.value.password;
            u.firstName=this.registerForm.value.firstName;
            u.lastName=this.registerForm.value.lastName;
            // console.log("f name is "+this.registerForm.value.firstName);
            // console.log(this.registerForm.value.lastName);
            this.userserviceobj.addUser(u).subscribe(
                data=>{
                // console.log("user added successfully");
                this.msg="Register Successfully, You can login now";
                this.router.navigate(['./login']);
                },error=>{
                console.error();
                }
            );
        }
    }
    onReset()
    {
            this.submitted = false;
            this.registerForm.reset();
    }
}
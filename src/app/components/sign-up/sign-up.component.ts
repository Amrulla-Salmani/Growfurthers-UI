import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // signupForm : FormGroup;
  ConfirmPass: string = 'none';

  displayMsg: string = '';
  isAccountCreated: boolean = false;
  constructor(private authservice: AuthService,private router:Router,private dialog: MatDialog) { }

  ngOnInit(): void{  

  }
  signupForm: FormGroup = new FormGroup({
    firstname: new FormControl("",[Validators.required,Validators.minLength(2)]),
    lastname: new FormControl("",[Validators.required,Validators.minLength(2)]),
    mail: new FormControl("",[Validators.email]),
    mobile: new FormControl("",[Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]*")]),
    pwd: new FormControl("",[Validators.minLength(8),Validators.maxLength(12)]),
    cpwd: new FormControl("")

  });  
  signupsubmitted(){
    if(this.Password.value == this.CPwd.value){
      this.ConfirmPass = 'none'

      this.authservice.signupUser([
        this.signupForm.value.firstname,
        this.signupForm.value.lastname,
        this.signupForm.value.pwd,
        this.signupForm.value.mail,
        this.signupForm.value.mobile
        
      ]).subscribe(res => {
        if(res == "Success"){
          this.displayMsg = "Account Created!";
          this.isAccountCreated = true;
          // this.router.navigateByUrl('login');
        }else if(res = "Already Exists!"){
          this.displayMsg = "Account Exists.";
          this.isAccountCreated = false;
        }else {
          this.displayMsg = "Something Went Wrong!";
          this.isAccountCreated = false;
        }
      })
    }
    else{this.ConfirmPass = 'inline'
  }
  this.openLogin()
  }
   
  get FirstName() : FormControl{
    return this.signupForm.get("firstname") as FormControl;
  }
  get LastName() : FormControl{
    return this.signupForm.get("lastname") as FormControl;
  }
  get email() : FormControl{
    return this.signupForm.get("mail") as FormControl;
  }
  get phoneNo() : FormControl{
    return this.signupForm.get("mobile") as FormControl;
  }
  get Password() : FormControl{
    return this.signupForm.get("pwd") as FormControl;
  }
  get CPwd() : FormControl{
    return this.signupForm.get("cpwd") as FormControl;
  }

  openLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px',
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('Dialog closed with result:', result);
    // });
  }
  
}

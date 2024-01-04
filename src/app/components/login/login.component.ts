import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  constructor(private loginAuth: AuthService,private router: Router,private dialog: MatDialog,private dialogRef: MatDialogRef<LoginComponent>,private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
  }

  loginsubmitted(){
    this.loginAuth.loginUser([this.loginform.value.userName,this.loginform.value.password])
    .subscribe(res => {
      if(res == "Failure"){
        alert("Login Unsucessfull!")
      } else {
        this.loginAuth.settoken(res);
        this.sharedDataService.setLoginStatus(true)
        // this.router.navigateByUrl('home')
      }
    }); 
  }

  closeDialog(): void {
    this.dialogRef.close(); // Close the dialog
  }

  loginform: FormGroup = new FormGroup({
    userName: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,
      Validators.minLength(8),
      Validators.maxLength(12)])
  });

  get UserName() : FormControl{
    return this.loginform.get("userName") as FormControl;
  }

  get Password() : FormControl{
    return this.loginform.get("password") as FormControl;
  }

  openSignup(): void {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '300px',
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('Dialog closed with result:', result);
    // });
  }
}

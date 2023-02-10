import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  message: boolean=false;
  constructor(private formBuilder: FormBuilder,private admin: AdminService, private http:  HttpClient, private router: Router) { }
  ngOnInit(): void {
  }
  loginForm= new FormGroup({
    adminName: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),

  });
  isAdminValid: boolean =false;
  get f() {
    return this.loginForm.controls;
  }
  
  onSubmit(){
    let x={
      AdminId:0,
      AdminName :this.loginForm.value.adminName,
      Password :this.loginForm.value.password,}
      ;
    this.isAdminValid =true;
    if(this.loginForm.invalid){
      alert("AdminName or Password incorrect!");
      return;
    }
    else{
    this.admin.login(x).subscribe(data => {
      alert("Login successfull");
      this.router.navigate(['/admin-home']);
    });
}
}
}

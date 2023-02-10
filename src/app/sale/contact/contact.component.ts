import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private ct: ContactService, private route: Router) { }
  cusFormCreate: FormGroup =new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    companyName: new FormControl('',Validators.required),
    content: new FormControl('',Validators.required)
  });
  submited:boolean = false;
  ngOnInit(): void {
  }

  get f() {
    return this.cusFormCreate.controls;
  }

  onCreateCus(){
    let x={
      CusdId:0,
      FirstName :this.cusFormCreate.value.firstName,
      LastName :this.cusFormCreate.value.lastName,
      CompanyName :this.cusFormCreate.value.companyName,
      Content :this.cusFormCreate.value.content,}
      ;
    this.submited =true;
    if(this.cusFormCreate.invalid){
      return;
    }
    else{
    this.ct.createContact(x).subscribe(data => {
      this.route.navigate(['/models']);
    });
  }
  }
  onEdit(){
    window.scrollTo(0,0);
  }
  
}

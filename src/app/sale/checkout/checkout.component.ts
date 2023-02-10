import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private ck: CheckoutService, private route: Router) { }
  cusFormCreate: FormGroup =new FormGroup({
    fullName: new FormControl('',Validators.required),
    email1: new FormControl('',Validators.required),
    addressCus: new FormControl('',Validators.required),
    phoneNumber: new FormControl('',Validators.required),
    dayGet: new FormControl('',Validators.required)
  });
  submited:boolean = false;
  ngOnInit(): void {
    this.CartDetail();
  }

  getCartDetails:any = [];
  CartDetail(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!); 
      console.log(this.getCartDetails);
    }
  }


  get f() {
    return this.cusFormCreate.controls;
  }

  onCreateCus(){
    let x={
      CusdId:0,
      FullName :this.cusFormCreate.value.fullName,
      Email :this.cusFormCreate.value.email1,
      AddressCus :this.cusFormCreate.value.addressCus,
      PhoneNumber :this.cusFormCreate.value.phoneNumber,
      DayGet :this.cusFormCreate.value.dayGet,}
      ;
    this.submited =true;
    if(this.cusFormCreate.invalid){
      return;
    }
    else{
    this.ck.createCheckout(x).subscribe(data => {
      this.route.navigate(['/models']);
    });
  }
}

public createImgPath = (serverPath: string) => { 
  return `https://localhost:44352/wwwroot/products/${serverPath}`; 
}

public createImgCPath = (serverPath: string) => { 
  return `https://localhost:44352/wwwroot/collections/${serverPath}`; 
}

}

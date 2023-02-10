import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrls: ['./checkout-list.component.css']
})
export class CheckoutListComponent implements OnInit {
  cus: any[] = [];
  searchText: any;
  totalLength:any;
  page: number = 1;
  searchForm= new FormGroup({
    fullName: new FormControl('')
});
  constructor(private c: CheckoutService) { }

  ngOnInit(): void {
    this.CartDetail();
    this.c.getCheckouts(7).subscribe(data => {
      this.cus = data;
      this.totalLength = data.length;
    })
  }
getCartDetails:any = [];
  CartDetail(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!); 
      console.log(this.getCartDetails);
    }
  }
  onDeleteCus(id: number) {
    if (confirm("Are you sure delete?")){
      this.c.deleteCheckout(id).subscribe(data => {
        this.c.getCheckouts().subscribe(data => {
          this.cus = data;
          this.totalLength = data.length;
        })
      })
    }
  }

  public createImgPath = (serverPath: string) => { 
    return `https://localhost:44352/wwwroot/products/${serverPath}`; 
  }

  public createImgCPath = (serverPath: string) => { 
    return `https://localhost:44352/wwwroot/collections/${serverPath}`; 
  }
  

  onSearch(){
    this.c.getCheckouts(7, this.searchForm.value.fullName).subscribe(data => {
      this.cus = data;
    })
  }

}

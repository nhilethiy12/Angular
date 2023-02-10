import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cart: CartService) { }

  ngOnInit(): void{
    this.CartDetail();
    this.loadCart();
  }

  getCartDetails:any = [];
  CartDetail(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!); 
      console.log(this.getCartDetails);
    }
  }

  incQnt(productId:any, qnt:any, qnt1: any){
    for(let i = 0; i<this.getCartDetails.length; i++){
      if(this.getCartDetails[i].productId === productId){
        if(qnt !=qnt1)
        this.getCartDetails[i].qnt = parseInt(qnt) + 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    this.loadCart();
  }

  decQnt(productId:any, qnt:any){
    for(let i = 0; i<this.getCartDetails.length; i++){
      if(this.getCartDetails[i].productId === productId){
        if(qnt != 1)
        this.getCartDetails[i].qnt = parseInt(qnt) - 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    this.loadCart();
  }

  total:number=0;
  loadCart(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      this.total = this.getCartDetails.reduce(function(acc:any, val:any){
        return acc + (val.price * val.qnt)
      }, 0);
    }
  }

  removeall(){
    localStorage.removeItem('localCart');
    this.getCartDetails = [];
    this.total = 0;
    this.cartNumber = 0;
    this.cart.cartSubject.next(this.cartNumber);
  }

  singleDelete(getCartDetail:any){
    console.log(getCartDetail);
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      for(let i = 0; i < this.getCartDetails.length; i++){
        if(this.getCartDetails[i].productId === getCartDetail){
          this.getCartDetails.splice(i, 1);
          localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
          this.loadCart();
          this.cartNumberFunc();
        }
      }
    }
  }

  cartNumber:number = 0;
  cartNumberFunc(){
    var cartValue = JSON.parse(localStorage.getItem('localCart')!);
    this.cartNumber = cartValue.length;
    this.cart.cartSubject.next(this.cartNumber);
  }
  public createImgPath = (serverPath: string) => { 
    return `https://localhost:44352/wwwroot/products/${serverPath}`; 
  }

  public createImgCPath = (serverPath: string) => { 
    return `https://localhost:44352/wwwroot/collections/${serverPath}`; 
  }
  onEdit(){
    window.scrollTo(0,0);
  }
}

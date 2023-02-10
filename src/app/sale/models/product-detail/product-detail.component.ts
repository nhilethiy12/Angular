import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number = 0;
  products: any;
  product: any;

  constructor(private route: ActivatedRoute, private pro: ProductService, private cart: CartService) {
   }

  ngOnInit(): void {
      this.id =this.route.snapshot.params['id'];
     this.getOne();
     this.listProductByBrand();
  }

  getOne(){
    this.pro. getOne(this.id).subscribe((data)=> {
      this.products = data;
     });

    }

  listProductByBrand(){
    this.pro.listProductByBrand(this.id).subscribe(data => {
      this.product = data;
      console.log(data);
      
    });
  }

  inc(products: any) {
    if(products.qnt != products.qnt1){
      products.qnt += 1;
    }
  }

  dec(products:any) {
    if(products.qnt != 1){
      products.qnt -= 1;
    }
  }

  itemsCart: any = [];
  addCart(category: any){
    let cartDataNull = localStorage.getItem('localCart');
    if(cartDataNull == null){
      let storeDataGet: any = [];
      storeDataGet.push(category);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));
    }
    else{
      var idc = category.id;
      let index: number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localCart')!);
      for (let i = 0; i < this.itemsCart.length; i++){
        if(parseInt(idc) === parseInt(this.itemsCart[i].id)){
          this.itemsCart[i].qnt = category.qnt;
          index = i;
          break;
        }
      }
      if(index == -1){
        this.itemsCart.push(category);
        localStorage.setItem('localCart',JSON.stringify(this.itemsCart))
      }
      else{
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }
    }
    this.cartNumberFunc();
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

  onEdit(){
    window.scrollTo(0,0);
  }
}

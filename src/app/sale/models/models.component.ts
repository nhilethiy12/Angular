import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  public products: Array<any> = [];
  constructor(private pro: ProductService, private cart: CartService) { }
  totalLength:any;
  page: number = 1;
  ngOnInit(): void {
    this.pro.getProducts(14).subscribe(data => {
      this.products = data;
      this.totalLength = data.length;
    })
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

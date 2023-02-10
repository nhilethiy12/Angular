import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-brand',
  templateUrl: './product-brand.component.html',
  styleUrls: ['./product-brand.component.css']
})
export class ProductBrandComponent implements OnInit {
  products: any;
  brands: any;
  brandId:any;
  id: number = 0;
  constructor(private brand: ProductService, private route: ActivatedRoute, private br: BrandService, 
    private cart: CartService) { }

  ngOnInit(): void {

    this.id =this.route.snapshot.params['id'];
    this.getOne();

    this.id =this.route.snapshot.params['id'];
    this.listProductByBrand();
   
  }

  getOne(){
    this.br. getOne(this.id).subscribe((data)=> {
      this.brands = data;
     });
    }

  listProductByBrand(){
    this.brand.listProductByBrand(this.id).subscribe((data: any) => {
      this.products = data;
      console.log(data);
      
    });
  }
  public createImgPath = (serverPath: string) => { 
    return `https://localhost:44352/wwwroot/products/${serverPath}`; 
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

}

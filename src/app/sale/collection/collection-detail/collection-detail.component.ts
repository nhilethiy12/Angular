import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.css']
})
export class CollectionDetailComponent implements OnInit {
  id: number = 0;
  collect: any;
  product: any;
  constructor(private pro: ProductService, private route: ActivatedRoute, private col: CollectionService, private cart: CartService) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
     this.getOneCol();

     this.id =this.route.snapshot.params['id'];
     this.getOnePro();
  }

  getOneCol(){
    this.col.getOneCollection(this.id).subscribe((data)=> {
      this.collect = data;
     });
    }

    getOnePro(){
      this.pro.getOne(this.id).subscribe((data)=> {
        this.product = data;
       });
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
    return `https://localhost:44352/wwwroot/collections/${serverPath}`; 
  }
}

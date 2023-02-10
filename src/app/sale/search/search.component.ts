import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'autocomplete';
  searchText: any;
  products: any[] = [];
  searchForm= new FormGroup({
    name: new FormControl('')
});
  constructor(private pro: ProductService, private cart: CartService,private fb : FormBuilder) { }

  ngOnInit(): void {
    this.onSearch();
    this.getNames();
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

  onSearch(){
    this.pro.getProduct(10, this.searchForm.value.name).subscribe(data => {
      this.filterData(data);
    })
  }
  
  public createImgPath = (serverPath: string) => { 
    return `https://localhost:44352/wwwroot/products/${serverPath}`; 
  }
  filterData(enteredData:any){
    this.searchText = this.products.filter(data=> {
      return data.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  getNames(){
    this.pro.getProductsDb().subscribe(data => {
      this.products = data;
    })
  }

}
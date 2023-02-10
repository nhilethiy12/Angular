import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private cart: CartService) { 
    this.cart.cartSubject.subscribe((data)=>{
      this.cartItem = data;
    });
  }

  ngOnInit(): void {
    this.cartItemFunc();
  }
  cartItem: number = 0;
  cartItemFunc(){
    if(localStorage.getItem('localCart') != null){
      var cartCount = JSON.parse(localStorage.getItem('localCart')!);
      this.cartItem = cartCount.length;
    }
  }

}

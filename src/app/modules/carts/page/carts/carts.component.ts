import { Component, OnInit } from '@angular/core';
import { LocalCartService } from 'src/app/core/service/localCart.service';
import { CartProduct } from 'src/app/data/schema/cart';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent  implements OnInit{

  carts: CartProduct[]
  totalPrice: number;

  constructor(private localCartService: LocalCartService) {}
  
  
  ngOnInit(): void {
    this.localCartService.getCarts()
    .subscribe(cartList => {
      this.carts = cartList
      this.totalPrice = this.carts.reduce((acc, value) => acc + value.count * value.price, 0)
    })
  }

  removeCart(cart: CartProduct) {
    this.localCartService.delete(cart.id)
  }

  checkout() {
    
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProduct } from 'src/app/data/schema/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() cartItem: CartProduct;
  @Output() onRemoveCart = new EventEmitter<CartProduct>()

  onRemove() {
    this.onRemoveCart.emit(this.cartItem)
  }
}

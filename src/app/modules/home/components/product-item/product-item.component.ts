import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/data/schema/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product: Product
  @Output() onAddCard = new EventEmitter<Product>()
  internalProduct: Product;

  constructor() {
    this.internalProduct = this.product
  }

  onClickAdd() {
    this.onAddCard.emit(this.product)
  }
  
}

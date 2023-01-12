import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/data/schema/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products:  Product[]
  @Output() productsChange = new EventEmitter<Product[]>
  @Output() onAddCard = new EventEmitter<Product>()

  onAdd(product: Product) {
    this.onAddCard.emit(product)
  }

}

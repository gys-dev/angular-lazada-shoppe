import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { LocalCartService } from 'src/app/core/service/localCart.service';
import { Product } from 'src/app/data/schema/product';
import { ProductDataService } from 'src/app/data/service/product.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { 
  products: Product[]
  originProducts: Product[]

  constructor(
    private productService: ProductDataService,
    private localCartService: LocalCartService
    ) {}

  ngOnInit(): void {
    this.productService.getListProduct()
    .subscribe(products => {
      this.products = products
      this.originProducts = products
    })
  }

  onSearch(value: string) {
    if (value == "" || !value) {
      this.products = this.originProducts;
      return
    }
    this.products = this.products.filter(p => p.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));

  }

  onAdd(product: Product) {
    this.localCartService.addOrUpdateCart(product)
  }

}

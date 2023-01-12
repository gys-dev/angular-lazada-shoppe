import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalCartService } from 'src/app/core/service/localCart.service';
import { Product } from 'src/app/data/schema/product';
import { ProductDataService } from 'src/app/data/service/product.data';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(
    public activeRouter: ActivatedRoute, 
    private productService: ProductDataService,
    private localCart: LocalCartService
  ) {}

  productDetail: Product
  ngOnInit(): void {
    const productId = this.activeRouter.snapshot.paramMap.get('id');

    this.productService.getDetail(Number(productId))
    .subscribe(product => {
      if (product) {
        this.productDetail = product
      }
    })
  }

  onAddCart() {
      this.localCart.addOrUpdateCart(this.productDetail)
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartsRoutingModule } from './carts-routing.module';
import { CartsComponent } from './page/carts/carts.component';
import { CheckoutComponent } from './page/checkout/checkout.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { OrderComponent } from './page/order/order.component';


@NgModule({
  declarations: [
    CartsComponent,
    CheckoutComponent,
    CartItemComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    CartsRoutingModule
  ]
})
export class CartsModule { }

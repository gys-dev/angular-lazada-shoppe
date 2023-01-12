import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './page/carts/carts.component';
import { CheckoutComponent } from './page/checkout/checkout.component';
import { OrderComponent } from './page/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: CartsComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'orders',
    component: OrderComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartsRoutingModule { }

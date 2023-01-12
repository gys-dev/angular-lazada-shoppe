import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActiveGuard } from './core/guard/can-active.guard';
import {AuthLayoutComponent} from "./layout/auth-layout/auth-layout.component"
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: '',
    component: ContentLayoutComponent,
    loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule)
  },
  {
    path: 'carts',
    component: ContentLayoutComponent,
    canActivate: [CanActiveGuard],
    loadChildren: () => import("./modules/carts/carts.module").then(m => m.CartsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

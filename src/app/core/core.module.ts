import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanActiveGuard } from './guard/can-active.guard';
import { LocalCartService } from './service/localCart.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {TokenInterceptor} from "./interceptor/token.interceptor"

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CanActiveGuard,
    LocalCartService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }

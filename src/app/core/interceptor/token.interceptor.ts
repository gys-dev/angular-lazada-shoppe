import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalService } from 'src/app/data/service/localStorage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private localStorage: LocalService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.localStorage.getData("TOKEN") as string;
    if (token) {
      const authReq = request.clone({
        headers: request.headers.set('Authorization', token)
      })

      return next.handle(authReq)
    }
    
    return next.handle(request);
  }
}

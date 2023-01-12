import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LocalService } from 'src/app/data/service/localStorage.service';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})

export class CanActiveGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private localService: LocalService,
    private router: Router
  ) {} 

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const token = this.localService.getData("TOKEN");
    if (token) {
      return of(true)
    }
    return this.router.parseUrl("/auth/login")
  }
  
}

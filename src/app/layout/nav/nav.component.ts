import { Component, OnInit } from '@angular/core';
import { LocalCartService } from 'src/app/core/service/localCart.service';
import {map, reduce, tap} from "rxjs";
import { Router } from '@angular/router';
import { LocalService } from 'src/app/data/service/localStorage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  numberOfCart: number = 0;
  isActiveMenu: boolean; 
  token: string;

  constructor(
    private localCart: LocalCartService,
    private localService: LocalService,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.localCart.getCarts()
      .pipe(
        map(product => product.reduce((acc, value) => acc + value.count, 0))
      )
      .subscribe(total => {
        this.numberOfCart = total
      })

      this.token = this.localService.getData("TOKEN") as string
  }

  toggle() {
    this.isActiveMenu = !this.isActiveMenu
  }

  logout() {
    this.localService.clearData()
    this.router.navigate(["/auth/login"])
  }

}

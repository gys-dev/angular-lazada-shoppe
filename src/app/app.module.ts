import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import {HomeModule} from "./modules/home/home.module";
import {AuthLayoutComponent} from "./layout/auth-layout/auth-layout.component"
import {ContentLayoutComponent} from "./layout/content-layout/content-layout.component"
import {SharedModule} from "./shared/shared.module"
import { CoreModule } from './core/core.module';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';
import {ProductDataService} from "./data/service/product.data";
import {LocalService} from "./data/service/localStorage.service";
import { CartsModule } from './modules/carts/carts.module';
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    ContentLayoutComponent,
    FooterComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AuthModule,
    SharedModule,
    CoreModule,
    HomeModule,
    CartsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductDataService,
    LocalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

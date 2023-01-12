import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import {LocalService} from "../../data/service/localStorage.service";
import {CartProduct} from "../../data/schema/cart"
import { Product } from "src/app/data/schema/product";


const KEY = "cartproducts";

@Injectable({
    providedIn: 'root'
})
export class LocalCartService {
    constructor(private localStorage: LocalService) {
        
    } 

    private cartSubjects = new BehaviorSubject<CartProduct[]>(this.persistCarts())
    private cartsObserbale = this.cartSubjects.asObservable();

    getCarts(): Observable<CartProduct[]> {
        return this.cartsObserbale
    }

    getSubjectCarts(): BehaviorSubject<CartProduct[]> {
        return this.cartSubjects
    }

    persistCarts(): CartProduct[] {
        const rawCarts = this.localStorage.getData(KEY) || "[]"
        const cartProduct = JSON.parse(rawCarts) as CartProduct[];
        return cartProduct
    }

    delete(productId: number) {
        const rawCarts = this.localStorage.getData(KEY) || "[]"
        if (!rawCarts) {
            return
        }
        const cartProduct = JSON.parse(rawCarts) as CartProduct[];

        const deleteCartProducts = cartProduct.filter(product => product.id != productId);

        this.localStorage.saveData(KEY, JSON.stringify(deleteCartProducts));
        this.cartSubjects.next(deleteCartProducts)
    }

    addOrUpdateCart(product: Product) {
        const rawCarts = this.localStorage.getData(KEY) || "[]"
        if (rawCarts) {
            const cartProduct = JSON.parse(rawCarts) as CartProduct[];
            
            if (cartProduct.length == 0) {
                // init list
                this.localStorage.saveData(KEY, JSON.stringify([{...product, count: 1}]));
                this.cartSubjects.next([{...product, count: 1}])
                return
            } else {
                // add new item or update
                const findId = product.id;
                const findProduct = cartProduct.find(product => product.id == findId);

                if (findProduct && findProduct.count > 0) {
                    // update
                    const updateProduct = {...findProduct};
                    updateProduct.count += 1;

                    const updateListCarts = cartProduct.map(cart => {
                        return {
                            ...cart,
                            count: cart.id == updateProduct.id ? updateProduct.count : cart.count
                        }
                    })

                    this.localStorage.saveData(KEY, JSON.stringify(updateListCarts));
                    this.cartSubjects.next(updateListCarts)
                } else {
                    // add new
                    const newCartProduct = Array.from(cartProduct)
                    newCartProduct.push({
                        ...product,
                        count: 1
                    })
                    this.localStorage.saveData(KEY, JSON.stringify(newCartProduct));
                    this.cartSubjects.next(newCartProduct)
                }
                
            }
        } else {
            // init list
            this.localStorage.saveData(KEY, JSON.stringify([{...product, count: 1}]));
            this.cartSubjects.next([{...product, count: 1}])
        }
    }
}
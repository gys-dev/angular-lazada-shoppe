import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { Product } from "../schema/product";

const data: Product[] = [
    {
        id: 1,
        name: 'Earthen Bottle',
        price: 48,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg'
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        price: 35,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg'
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        price: 48,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg'
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        price: 35,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg'
    },
    {
        id: 5,
        name: 'Earthen Bottle 2',
        price: 48,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg'
    },
    {
        id: 6,
        name: 'Earthen Bottle 3',
        price: 48,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg'
    }
];

@Injectable({
    providedIn: 'root'
})

export class ProductDataService {
    getListProduct(): Observable<Product[]> {
        return of<Product[]>(data)
    }

    getDetail(productId: number): Observable<Product | undefined> {
        const foundProduct = data.find(product => product.id === productId);
        return of<Product | undefined>(foundProduct)
    }
}
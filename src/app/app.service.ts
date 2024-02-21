import {Injectable, signal} from "@angular/core";

export interface Product {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  products = signal<Product[]>([]);
  constructor() {
  }

  addProduct(product: Product) {
    this.products.update(products => [...products, product]);
  }

  removeProduct(product: Product) {
    this.products.update(products => products.filter(p => p.id !== product.id));
  }
}

import {Component, computed, inject} from '@angular/core';
import {AppService, Product} from "../app.service";

@Component({
  selector: 'app-product-manager',
  standalone: true,
  imports: [],
  templateUrl: './product-manager.component.html',
  styleUrl: './product-manager.component.scss'
})
export class ProductManagerComponent {
  appService = inject(AppService);

  constructor() {}

  addProduct() {
    const productId = Math.floor(Math.random() * (100 - 4 + 1)) + 4;
    const productName = `product ${productId}`;
    this.appService.addProduct({id: productId, name: productName});
  }

  removeProduct(id: number) {
    this.appService.removeProduct({id, name: `product ${id}`} as Product);
  }

  get products() {
    return this.appService.products;
  }

  productCount =
    computed(() => this.appService.products().length)
}

import {Component, computed, inject, input, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {ProductModel} from "./product.model";

@Component({
  selector: 'app-product-manager',
  standalone: true,
  imports: [],
  templateUrl: './product-manager.component.html',
})
export class ProductManagerComponent implements OnInit {
  appService = inject(AppService);
  productList = input.required<ProductModel[]>();
  constructor() {

  }

  ngOnInit() {
    console.log('productList', this.productList());
    this.appService.products.set(this.productList());
  }

  addProduct() {
    const productId = Math.floor(Math.random() * (100 - 4 + 1)) + 4;
    const productName = `product ${productId}`;
    this.appService.addProduct({id: productId, name: productName});
  }

  removeProduct(id: number) {
    this.appService.removeProduct({id, name: `product ${id}`} as ProductModel);
  }

  get products() {
    return this.appService.products;
  }

  productCount =
    computed(() => this.appService.products().length)
}

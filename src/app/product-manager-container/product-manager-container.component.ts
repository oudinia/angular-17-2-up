import {Component, Inject, OnInit} from '@angular/core';
import {ProductManagerComponent} from "./product-manager/product-manager.component";
import {ProductModel} from "./product-manager/product.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product-manager-container',
  standalone: true,
    imports: [
        ProductManagerComponent
    ],
  templateUrl: './product-manager-container.component.html',
  styleUrl: './product-manager-container.component.scss'
})
export class ProductManagerContainerComponent implements OnInit{
  initialProductList: ProductModel[] = [];


  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get<ProductModel[]>('http://localhost:5211/api/products').subscribe((products: ProductModel[]) => {
      this.initialProductList = products;
    });
  }
}

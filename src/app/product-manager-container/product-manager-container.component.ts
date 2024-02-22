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
export class ProductManagerContainerComponent {
  initialProductList: ProductModel[] = [{id: 1, name: 'product 1'}, {id: 2, name: 'product 2'}, {id: 3, name: 'product 3'}];
}

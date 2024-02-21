import {Component, computed, inject, WritableSignal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppService, Product} from "./app.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practice-app-23';
  appService = inject(AppService);

  constructor() {}

  addProduct() {
    const productId = Math.floor(Math.random() * (100 - 4 + 1)) + 4;
    const productName = `product ${productId}`;
    this.appService.addProduct({id: productId, name: productName});
  }

  get products() {
    return this.appService.products;
  }

  productCount =
    computed(() => this.appService.products().length)
}

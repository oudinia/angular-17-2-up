import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductManagerComponent} from "./product-manager/product-manager.component";
import {Product} from "./app.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practice-app-23';
  initialProductList: Product[] = [{id: 1, name: 'product 1'}, {id: 2, name: 'product 2'}, {id: 3, name: 'product 3'}];

  constructor() {
  }

}

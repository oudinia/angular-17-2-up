import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductManagerComponent} from "./product-manager/product-manager.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practice-app-23';

}

import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductManagerContainerComponent} from "./product-manager-container/product-manager-container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductManagerContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practice-app-23';
}

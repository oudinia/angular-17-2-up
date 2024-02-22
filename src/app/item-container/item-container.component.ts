import { Component } from '@angular/core';
import {ItemModel} from "./item-manager/item.model";
import {ItemManagerComponent} from "./item-manager/item-manager.component";

@Component({
  selector: 'app-item-container',
  standalone: true,
  imports: [
    ItemManagerComponent
  ],
  templateUrl: './item-container.component.html',
  styleUrl: './item-container.component.scss'
})
export class ItemContainerComponent {

initialItemList: ItemModel[] = [
  {id: 1, name: 'item 1'},
  {id: 2, name: 'item 2'},
  {id: 3, name: 'item 3'}
];

}

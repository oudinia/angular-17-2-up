import {Component, computed, inject, input, OnInit} from '@angular/core';
import {ItemService} from "./item.service";
import {ItemModel} from "./item.model";

@Component({
  selector: 'app-item-manager',
  standalone: true,
  imports: [],
  templateUrl: './item-manager.component.html',
  styleUrl: './item-manager.component.scss'
})
export class ItemManagerComponent implements OnInit {

  itemService = inject(ItemService);
  itemList = input.required<ItemModel[]>();

  constructor() {
  }

  ngOnInit() {
    this.itemService.items.set(this.itemList());
  }

  addItem() {
    const itemId = Math.floor(Math.random() * (100 - 4 + 1)) + 4;
    const itemName = `item ${itemId}`;
    this.itemService.addItem({id: itemId, name: itemName});
  }

  removeItem(id: number) {
    this.itemService.removeItem({id, name: `product ${id}`} as ItemModel);
  }

  get items() {
    return this.itemService.items;
  }

  itemCount = computed(() => this.itemService.items().length)

}

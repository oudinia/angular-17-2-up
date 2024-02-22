import {Injectable, signal} from "@angular/core";
import {ItemModel} from "./item.model";


@Injectable({
  providedIn: 'root'
})

export class ItemService {

  items = signal<ItemModel[]>([]);

  constructor() {
  }

  addItem(item: ItemModel) {
    this.items.update(items => [...items, item]);
  }

  removeItem(item: ItemModel){
    this.items.update(items => items.filter(i => i.id !== item.id));
  }
}

import { Injectable } from "@angular/core";
import { items } from "../../../shared/data/items.data";
import { Item } from "../../../shared/models/item/item.model";

@Injectable({providedIn: 'root'})

export class ItemListService {

    constructor(){}

    get allItems(): Item[] {
        return items;
    }
}
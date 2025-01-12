import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../../../shared/components/card/card.component";
import { ItemListService } from '../../services/item-list.service';
import { Item } from '../../../../shared/models/item/item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit {

  allItems!: Item[];

  constructor(private itemListService: ItemListService) { }

  ngOnInit(): void {
    this.allItems = this.itemListService.allItems;
  }

}

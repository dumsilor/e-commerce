import { Component } from '@angular/core';
import { CardsComponent } from "./components/cards/cards.component";

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  
}

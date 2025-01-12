import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input() itemName!: string;
@Input() itemDescription!: string;
@Input() itemPrice!: number;
@Input() itemCategory!: string;
@Input() itemStock!: number;
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { SidebarComponent } from "../../../shared/components/sidebar/sidebar.component";
import { CardComponent } from "../../../shared/components/card/card.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

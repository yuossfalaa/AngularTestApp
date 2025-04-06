import { Component, Input } from '@angular/core';
import { WishItem } from '../../../shared/models/wishitem';

@Component({
  selector: 'wish-list',
  standalone: false,
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  @Input() items: WishItem[] = [];

   
}

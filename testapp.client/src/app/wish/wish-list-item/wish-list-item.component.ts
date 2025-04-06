import { Component, Input } from '@angular/core';
import { WishItem } from '../../../shared/models/wishitem';
import { EventService } from '../../../shared/EventService';

@Component({
  selector: 'wish-list-item',
  standalone: false,
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() item!: WishItem;

  private events: EventService;
  constructor(private _events: EventService) {
    this.events = _events;
  }
  get cssClass() {
    return this.item.isComplete ? 'strikOut' : '';
  }
  deleteWish(item: WishItem) {
    this.events.emit('removeWish', item);
  }
}

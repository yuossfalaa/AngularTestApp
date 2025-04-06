import { Component, OnInit } from '@angular/core';
import { WishItem } from '../../shared/models/wishitem';
import { EventService } from '../../shared/EventService';
import { WishService } from '../../shared/wish.service';

@Component({
  selector: 'wish-app',
  standalone: false,
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent implements OnInit {
  ngOnInit() {
    this.wishService.getWishs().subscribe(
      (data: any) => {
        this.items = data;
      },
      (error: any) => {
        console.error('Error fetching wish items:', error);
      })
  }
  items: WishItem[] = [];

  constructor(private events: EventService, private wishService: WishService) {
    events.listen('removeWish', (item: WishItem) => {
      let index = this.items.indexOf(item);
      if (index === -1) {
        return;
      }
      this.items.splice(index, 1);
    });
  }

  filter: any;
}

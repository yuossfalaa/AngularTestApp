import { Component,Output,EventEmitter } from '@angular/core';
import { WishItem } from '../../../shared/models/wishitem';

@Component({
  selector: 'add-wish-form',
  standalone: false,
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();
  newWishText: string = "";
  addNewWish() {
    this.addWish.emit(new WishItem(this.newWishText, false));
    this.newWishText = "";
  }

}

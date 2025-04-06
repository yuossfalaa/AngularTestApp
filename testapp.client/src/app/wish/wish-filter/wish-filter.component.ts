import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { WishItem } from '../../../shared/models/wishitem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
]
@Component({
  selector: 'wish-filter',
  standalone: false,
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit {
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  listFilter: string = "0";

  ngOnInit() {
    this.filterChange.emit(filters[0]);
  }

  onFilterChange(value: any) {
    const filterKey = Number(value);
    this.filter = filters[filterKey];
    this.filterChange.emit(filters[filterKey]);
  }
}

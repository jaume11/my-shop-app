import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './cart.service';
import { Item } from '../item-list/item-models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input()
  myItems: Item[];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.myItems = this.cartService.cart.myItems;
  }

}

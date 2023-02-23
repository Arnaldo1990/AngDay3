import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProduct } from '../Iproduct';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  cart: Array<IProduct> = []; 

  constructor(private CS: CartService) {

  }
  ngOnInit(): void {
  this.cart = this.CS.getCart();
  }
  }

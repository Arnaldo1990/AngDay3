import { Injectable } from '@angular/core';
import { IProduct } from './Iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cart : Array <IProduct> = [];
  constructor() { }

  addToCart(x: IProduct) {
this.cart.push(x);
  }

  getCart() {
    return this.cart;
  }

  clearCart(){
    this.cart = [];
    return this.cart;
  }
}

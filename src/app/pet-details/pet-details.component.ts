import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { products } from '../product';
import { IProduct } from '../Iproduct';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
product: IProduct = {} as IProduct;
id: number = 0;
// CS = new CartService();
constructor( private route: ActivatedRoute, private CS: CartService) {

}

addToCart(){
  alert("The pet has been added successfully to your cart.");
  this.CS.addToCart(this.product);
  console.log(this.CS.cart);
  
}

ngOnInit(): void {
  
  this.route.params.subscribe((params: Params) => {
this.id = +params["id"];
  this.product = products[this.id];

  });
}
}
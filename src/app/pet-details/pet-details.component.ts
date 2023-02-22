import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { products } from '../product';
import { IProduct } from '../Iproduct';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
product: IProduct = {} as IProduct;
id: number = 0;

constructor( private route: ActivatedRoute) {

}
ngOnInit(): void {
  
  this.route.params.subscribe((params: Params) => {
this.id = +params[this.id];
this.product = products[this.id];
  // this.product = params['name'];

  });
}
}
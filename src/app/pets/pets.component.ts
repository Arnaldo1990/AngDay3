import { Component } from '@angular/core';
import { products } from '../product';
import { IProduct } from '../Iproduct';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent {
products : Array<IProduct> = products;
}

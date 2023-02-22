import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './carts/carts.component';
import { HomeComponent } from './home/home.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [{
  path: "", component: HomeComponent
},{
  path: "pets", component: PetsComponent
},{
  path: "cart", component: CartsComponent
},{
  path: "pets/:productID", component: PetDetailsComponent
},{
  path: "**", redirectTo: ""
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

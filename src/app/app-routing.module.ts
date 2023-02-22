import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './carts/carts.component';
import { HomeComponent } from './home/home.component';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [{
  path: "", component: HomeComponent
},{
  path: "pets", component: PetsComponent
},{
  path: "cart", component: CartsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

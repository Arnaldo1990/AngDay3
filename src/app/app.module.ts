import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PetsComponent } from './pets/pets.component';
import { HomeComponent } from './home/home.component';
import { CartsComponent } from './carts/carts.component';
import { FooterComponent } from './footer/footer.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { SComponent } from './s/s.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PetsComponent,
    HomeComponent,
    CartsComponent,
    FooterComponent,
    PetDetailsComponent,
    SComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

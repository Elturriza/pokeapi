import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { TarjetasPokemonComponent } from './tarjeta/tarjetas-pokemon/tarjetas-pokemon.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    FavoritosComponent,
    NavbarComponent,
    NotFoundComponent,
    TarjetasPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

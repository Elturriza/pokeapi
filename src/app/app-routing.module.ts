import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './buscar/pokemon/pokemon.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';

const routes: Routes = [
  {path:"pokemons", component:PokemonsComponent},
  {path:"favoritos", component:FavoritosComponent},
  {path:"notFound", component:NotFoundComponent},
  {path:"pokemon/:name", component:PokemonComponent},
  {path:'', component:PokemonsComponent},
  {path:'**', redirectTo:'/notFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

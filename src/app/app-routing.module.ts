import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';

const routes: Routes = [
  {path:"pokemons", component:PokemonsComponent},
  {path:"favoritos", component:FavoritosComponent},
  {path:"notFound", component:NotFoundComponent},
  {path:'', component:PokemonsComponent},
  {path:'**', redirectTo:'/notFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

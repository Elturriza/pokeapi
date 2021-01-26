import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from 'src/app/servicios/pokemon-service.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokes=[]
  stats:{
    id,
    hp,
    attack,
    defense,
    sattack,
    sdefense,
    speed
  };
  constructor(private pokemons:PokemonServiceService) { }

  getPokemones(){
    this.pokemons.getPokemons()
    .toPromise().then( res=>{
      
      this.pokes=res;
      
     return this.pokes;
     
      
    });
  }


  getStats(name:string){
    
        this.pokemons.getPokemonsStats(name).toPromise().then(data=>{
          this.stats=data;
        })
    
   }
  ngOnInit(): void {
    
  }



}

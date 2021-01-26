import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonServiceService } from 'src/app/servicios/pokemon-service.service';

@Component({
  selector: 'app-tarjetas-pokemon',
  templateUrl: './tarjetas-pokemon.component.html',
  styleUrls: ['./tarjetas-pokemon.component.css']
})
export class TarjetasPokemonComponent implements OnInit {

  pokes=[];
  pokeNombres=[];
  stats:{
    id,
    hp,
    attack,
    defense,
    sattack,
    sdefense,
    speed
  };
  lugia:any[]=[];
  load=false;
  load2=false;
  load3=false;
  load4=false;
  load1=false;
  load0=false;
  load5=false;

  constructor(private pokemons:PokemonServiceService,
              private router:Router) {}

  ngOnInit(): void {
    this.getLugia();
  }

  getPokemones(){
    this.pokemons.getPokemons()
    .toPromise().then( res=>{
      
      this.pokes=res;
      
     return this.pokes;
     
      
    });
  }

  getLugia(){
  this.pokemons.getPokemonsNames("lugia").toPromise().then(data=>{
    this.pokes.push(data);
    
  })
  }
  
  getStats(name:string){
    this.load=!this.load;
    this.pokemons.getPokemonsStats(name).toPromise().then(data=>{
      this.stats=data;
    })
    
   }
  getNextPoke(pokemon:string){
    //this.router.navigate(['/search',pokemon]);
    this.pokemons.getPokemonsNames(pokemon.toString()).toPromise().then(data=>{
      this.pokes=[];
      this.pokes.push(data);
      
    })
  }
  getHp(){
    this.load0=!this.load0;
  }
  getAtk(){
    this.load1=!this.load1;
  }
  getDef(){
    this.load2=!this.load2;
  }
  getSatk(){
    this.load3=!this.load3;
  }
  getSdef(){
    this.load4=!this.load4;
  }
  getSpeed(){
    this.load5=!this.load5;
  }

  guardarPokemones(name:string){
    this.pokeNombres.push(name);
    localStorage.setItem("name",JSON.stringify(this.pokeNombres));
    console.log("guardado");
  }

}




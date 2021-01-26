import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from 'src/app/servicios/pokemon-service.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  pokes=[];
  pokemons=[];
  load=true;
  names=[];

  constructor(private pokemon:PokemonServiceService) { 
    this.cargarStorage();
    this.getPokemons();
  }
  
  cargarStorage(){
    if(localStorage.getItem('name')){
    this.pokes=JSON.parse(localStorage.getItem('name'));
    }else{
      console.log("No hay pokes");
    }
  }
  
  getPokemons(){
    let name:string;
    for(let i=0; i<this.pokes.length; i++){
      name=this.pokes[i];
      this.pokemon.getPokemonsNames(name.toString()).toPromise().then(data=>{
          this.pokemons.push(data);
          console.log(this.names)
          console.log(this.pokemons);
        })
    }
  }
  buscarPokemons(name:string){
    this.load=false;
    if(name===""){
      this.cargarStorage();
      return;
    }
    for(let i=0; i<this.pokes.length; i++){
      if(name===this.pokes[i]){
        this.names=this.pokes[i];
        this.pokemon.getPokemonsNames(name.toString()).toPromise().then(data=>{
          this.pokemons=[];
          this.pokemons.push(data);
          console.log(this.names)
          console.log(this.pokemons);
        })
      }
    }
    
  }

  erase(i:number){
    this.pokes.splice(i,1);
    localStorage.setItem("name",JSON.stringify(this.pokes));
  }

  ngOnInit(): void {
  }

}

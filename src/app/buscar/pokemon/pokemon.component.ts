import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonServiceService } from 'src/app/servicios/pokemon-service.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private pokemon:PokemonServiceService,
              private router:ActivatedRoute,private route:Router) { 
    this.router.params.subscribe(params=>{
      this.cargarStorage();
      this.buscarPokemons(params['name']);
    });
  }

  pokes=[];
  pokemons=[];
  names=[];

  cargarStorage(){
    if(localStorage.getItem('name')){
    this.pokes=JSON.parse(localStorage.getItem('name'));
    }else{
      console.log("No hay pokes");
    }
  }

  buscarPokemons(name:string){
    
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

  erase(name:string){
    
    for(let i=0; i<this.pokes.length; i++){
      
      if(name===this.pokes[i]){
        this.pokes.splice(i,1);
        localStorage.setItem("name",JSON.stringify(this.pokes));
        window.history.back();
   }
   }
  }

  ngOnInit(): void {
  }

}

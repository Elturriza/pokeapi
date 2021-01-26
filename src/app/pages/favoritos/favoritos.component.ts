import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private pokemon:PokemonServiceService,
              private router:Router) { 
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
        })
    }
  }
  buscarPokemons(name:string){
    this.router.navigate(['/pokemon',name]);
    
  }

  erase(i:number){
    this.pokes.splice(i,1);
    localStorage.setItem("name",JSON.stringify(this.pokes));
    window.location.reload();
    this.pokemons[i].pop();
    
  }


  ngOnInit(): void {
  }

}

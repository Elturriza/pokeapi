import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  baseUrl:string = environment.baseUrl;
  private nextPokemons = '';

  constructor(private http: HttpClient) { }

  getPokemons():Observable<any>{

   return this.http.get<any>(`${this.baseUrl}/pokemon/${this.nextPokemons}`)
            .pipe(map(data=>{

              var pokemonUrl=[];
              this.nextPokemons=data.next;
              this.nextPokemons=this.nextPokemons.slice(34)


              for(let i=0;i<data.results.length;i++){
                this.getPokemonCard(data.results[i].url)
                      .subscribe(res=>{
                        pokemonUrl.push(res);

                      })
              }
              // console.log(data.results)
              // console.log(pokemonUrl);
               return pokemonUrl;

            }));
  }
  getPokemonCard(url:string):Observable<any>{

    return this.http.get(url).pipe(map(pokeData=>{

      return pokeData
    }));

  }

  getPokemonsNames(name:string){
    console.log("pokimonnames")
    console.log(name)
    console.log("pokimonnames")
    return this.http.get<any>(`${this.baseUrl}/pokemon/${name}`)
     .pipe(map(data=>{
      return data;
    }))
  }

  getPokemonsStats(id:string){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${id}`)
    .pipe(map(data=>{
      let stats={
        id:id,
        hp:"",
        attack:"",
        defense:"",
        sattack:"",
        sdefense:"",
        speed:""

      }
      
      stats.id=data.id;
      stats.hp=data.stats[0].base_stat;
      stats.attack=data.stats[1].base_stat;
      stats.defense=data.stats[2].base_stat;
      stats.sattack=data.stats[3].base_stat;
      stats.sdefense=data.stats[4].base_stat;
      stats.speed=data.stats[5].base_stat;
      return stats;

    }))
  }
}

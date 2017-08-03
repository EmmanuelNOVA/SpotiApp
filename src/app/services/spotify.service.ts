import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any [] = [];

  urlBusqueda:string = 'https://api.spotify.com/v1/search';
  urlArtista:string = 'https://api.spotify.com/v1/artists';

  constructor(private http:Http ) { }

    getArtistas( termino:string ){
         let headers = new Headers();
         headers.append('authorization','Bearer BQAwQO5TKIY2bCzB2qMZlnDaerRr23GU-tJSAOAckkiPH7V762xCc2Gelh1WrUc1ujbmPw-T4pOL0ZzGpLczqA');

         let query = `?q=${ termino }&type=artist`;
         let url = this.urlBusqueda + query;

         return this.http.get(url, {headers})
           .map(res =>{
              this.artistas = res.json().artists.items;
              console.log(this.artistas);
              //return res.json().artists.items;
           });
    }

    getArtista (id:string){

    }
}

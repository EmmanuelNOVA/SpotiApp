import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any [] = [];
  tokenAPI:string = 'Bearer BQDS4RTK12VtGlqkJv2L6uigmfTQzgoosCNj2yVj6CiS-_7dq1aKeWLwxr4ya-kQFrzcs4ECe17H0psDb-2mng';
  urlBusqueda:string = 'https://api.spotify.com/v1/search';
  urlArtista:string = 'https://api.spotify.com/v1/artists';

  constructor(private http:Http ) { }

    getArtistas( termino:string ){
         let headers = this.getHeaders();
         let query = `?q=${ termino }&type=artist`;
         let url = this.urlBusqueda + query;

         return this.http.get(url, {headers})
           .map(res =>{
              this.artistas = res.json().artists.items;
           });
    }

    getArtista( id:string ){
        let headers = this.getHeaders();
        let query = `/${ id }`;
        let url = this.urlArtista + query;
        return this.http.get(url, {headers})
          .map(res =>{
              console.log(res.json());
              return res.json();
          });
    }

    getTop( id:string ){
      let headers = this.getHeaders();
      let query = `/${ id }/top-tracks?country=US`;
      let url = this.urlArtista + query;
      return this.http.get(url, {headers})
        .map(res =>{
          console.log(res.json());
          return res.json().tracks;
        });
    }
    getAlbums( id:string ){
      let headers = this.getHeaders();
      let query = `/${ id }/albums?album_type=album&market=US`;
      let url = this.urlArtista + query;
      return this.http.get(url, {headers})
        .map(res =>{
          console.log(res.json().items);
          return res.json().items;
        });
    }

    getHeaders(){
      let headers = new Headers();
      headers.append('authorization', this.tokenAPI);
      return headers;
    }
}

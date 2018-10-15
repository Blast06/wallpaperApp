import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AlbumsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlbumsProvider {

  urlAlbumsOne:string = './assets/data/_.json'; // Albums One


  constructor(public http: HttpClient) {
    console.log('Hello AlbumsProvider Provider');
  }


  getDataTracksOne() { 
    // Obtener todos los albunes y tracks One
    return this.http.get(this.urlAlbumsOne);
  }

}

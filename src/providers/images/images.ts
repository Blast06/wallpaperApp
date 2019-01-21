import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class ImagesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ImagesProvider Provider');
  }


  getImage(url:string){
    return this.http.get(url).pipe(map( data => data['hits']));
  }


}

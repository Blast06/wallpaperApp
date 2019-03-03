import { ImagenPage } from './../imagen/imagen';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Scroll } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import {  AngularFirestore } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import _ from 'lodash';
import { Imagen } from '../../models/imagen.model';
import { PaginationService } from '../../providers/pagination.service';



@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})



export class GalleryPage {

  @ViewChild(Scroll) scrollElement: Scroll;
  batch: number = 4;
  last: any = Date.now();
  empty: boolean = false;
  loading: boolean = false;

  nombreList: string;
  showSpinner: boolean = true;

  imagenes: Observable<Imagen[]>;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public afs: AngularFirestore, 
    public page: PaginationService) {

    
  }


  ionViewWillEnter(){
    this.page.reset();
    this.nombreList = this.navParams.get('nombreList');
    console.log(JSON.stringify(this.nombreList));
    this.getImagenes(this.nombreList);

  }

 


  onScrollEnd(event)
  {
    console.log('Scroll end');
    this.page.more();
  }
   



  enviar(image: Imagen) {
    this.navCtrl.push(ImagenPage, { imagen: image });
    console.log(JSON.stringify(image));
  }
  getImagenes(nombreList) {
    console.log('nombrelist :', nombreList);
    this.page.init(nombreList, 'nombre', { reverse: true, prepend: false });
    
  }

}

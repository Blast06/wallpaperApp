import { ImagenPage } from './../imagen/imagen';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

interface Image{
  largeImageURL:string;
}

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})


export class GalleryPage {

  imagenes:Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.imagenes = this.navParams.get('imagenes');
    console.log(JSON.stringify(this.imagenes));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  enviar(image:Image){
    this.navCtrl.push(ImagenPage, { imagen:image });
    console.log(JSON.stringify(image));
  }

  
  
  

}

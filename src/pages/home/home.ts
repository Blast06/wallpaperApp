import { AngularFireDatabase } from '@angular/fire/database';

import { GalleryPage } from './../gallery/gallery';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FRASES_DE_AMOR, SORRY, JUNTOS_X_100PRE, SALUDOS_DESPEDIDAS, AMOR_GRACIOSAS, CARTAS_AMOR, PERDONAME, TE_EXTRANO } from '../../assets/data/API_ENDPOINTS';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { ImagesProvider } from '../../providers/images/images';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface Item { nombre: string; url: string }

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {

  headers = new HttpHeaders({'user_key': '62e4a639ea687dc5638d67b0949915a7'});


  tracks: any[];
  imagenes: any[] = [];
  imgs: Observable<any[]>;
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(public navCtrl: NavController,
    public http: HttpClient,
    public _img: ImagesProvider,
    public afDB: AngularFireDatabase,
    public afs: AngularFirestore) {

    this.imgs = afDB.list('Frases cortas').valueChanges();

  }



  //TO REFORMAT WHEN ADMIN PANEL UPDATE FOR TESTING
  // goToGallery(gallery: string) {

  //   this.itemsCollection = this.afs.collection<Item>('Frases cortas'); //donde 'img' es el nombre de la carpeta
  //   this.items = this.itemsCollection.valueChanges();
  //   this.navCtrl.push(GalleryPage, { imagenes: this.items });

  // }

  goToGallery(number: any) {

    switch (number) {

      case 1:
        this.itemsCollection = this.afs.collection<Item>('Amor_a_Distancia'); //donde '' es el nombre de la carpeta
        this.items = this.itemsCollection.valueChanges();
        this.navCtrl.push(GalleryPage, { imagenes: this.items });
        console.log(JSON.stringify(this.items));

        break;

      case 2:
        this.itemsCollection = this.afs.collection<Item>('Disculpas de amor'); //donde 'img' es el nombre de la carpeta
        this.items = this.itemsCollection.valueChanges();
        this.navCtrl.push(GalleryPage, { imagenes: this.items });
        break;

      case 3:
        this.itemsCollection = this.afs.collection<Item>('juntos x 1oopre'); //donde 'img' es el nombre de la carpeta
        this.items = this.itemsCollection.valueChanges();
        this.navCtrl.push(GalleryPage, { imagenes: this.items });

        break;

      case 4:
        this.itemsCollection = this.afs.collection<Item>('saludos y despedidas'); //donde 'img' es el nombre de la carpeta
        this.items = this.itemsCollection.valueChanges();
        this.navCtrl.push(GalleryPage, { imagenes: this.items });
        break;

      case 5:
        this.itemsCollection = this.afs.collection<Item>('Amor graciosas'); //donde 'img' es el nombre de la carpeta
        this.items = this.itemsCollection.valueChanges();
        this.navCtrl.push(GalleryPage, { imagenes: this.items });
        break;

      case 6:
        this.itemsCollection = this.afs.collection<Item>('Cartas de Amor'); //donde 'img' es el nombre de la carpeta
        this.items = this.itemsCollection.valueChanges();
        this.navCtrl.push(GalleryPage, { imagenes: this.items });
        break;

      case 7: // FALTA ESTA
        this.itemsCollection = this.afs.collection<Item>('Imagenes de te extrano'); //donde 'img' es el nombre de la carpeta
        this.items = this.itemsCollection.valueChanges();
        this.navCtrl.push(GalleryPage, { imagenes: this.items });
        break;

      case 8:
        this.itemsCollection = this.afs.collection<Item>('Frases cortas'); //donde 'img' es el nombre de la carpeta
        this.items = this.itemsCollection.valueChanges();
        this.navCtrl.push(GalleryPage, { imagenes: this.items });
        break;

      default:
        break;
    }

  }






}

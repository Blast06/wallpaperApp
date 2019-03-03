import { AngularFireDatabase } from '@angular/fire/database';

import { GalleryPage } from './../gallery/gallery';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MyappsPage } from '../myapps/myapps';
import { AppRate } from '@ionic-native/app-rate/ngx';

export interface Item { nombre: string; url: string }
export interface ExtraCategorias { tipo: string; estado: boolean }

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {



  tracks: any[];
  show: boolean = false;
  imagenes: any[] = [];
  imgs: Observable<any[]>;
  items: Observable<Item[]>;
  configuracion: Observable<any[]>;
  extra_categories:Observable<ExtraCategorias[]>;

  constructor(public navCtrl: NavController,
    public http: HttpClient,
    public afDB: AngularFireDatabase,
    public afs: AngularFirestore,
    public appRate: AppRate, ) {

    this.imgs = afDB.list('Frases cortas').valueChanges();
    




  }

  ionViewWillEnter() {
    this.getConfig();


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
        this.goToPage('Amor_a_Distancia');
        break;

      case 2:
        this.goToPage('Disculpas de amor');
        break;

      case 3:
        this.goToPage('juntos x 1oopre');
        break;

      case 4:
        this.goToPage('saludos y despedidas');
        break;

      case 5:
        this.goToPage('Amor graciosas');
        break;

      case 6:
        this.goToPage('Cartas de Amor');
        break;

      case 7:
        this.goToPage('Frases cortas');
        break;

      case 8:
        this.goToPage("Imagenes de te extrano");
        break;

      case 9:
        this.goToPage("Frases atrevidas");
        break;

      case 10:
        this.goToPage("Frases de Besos");
        break;

      case 11:
        this.goToPage("Frases de amor");
        break;

      case 12:
        this.goToPage("Preguntas de Amor");
        break;

      case 13:
        this.goToPage("Poemas de amor");
        break;

      default:
        break;

    }


  }

  goToPage(nombreList: string) {
    this.navCtrl.push(GalleryPage, { nombreList: nombreList });

  }

  goToAppsPage() {
    this.navCtrl.push(MyappsPage);
  }

  
  //NOTA
  // EN LAS CATEGORIAS EXTRA, AGREGAR CAMPO DE IMAGEN PARA PONERLA EN EL CARD A SU CATEGORIA.
  getConfig() {
    this.configuracion = this.afs.collection<ExtraCategorias>('configuracion').valueChanges();
    this.configuracion.subscribe((resultado:any) =>{
      resultado.length > 0 ? this.show = true : this.show = false;
      this.extra_categories = resultado;
      console.log(JSON.stringify(resultado));
      console.log(JSON.stringify(this.extra_categories));
    });
   

  }

}

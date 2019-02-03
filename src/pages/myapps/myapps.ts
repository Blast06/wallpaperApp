import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Market } from '@ionic-native/market/ngx';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { apps } from 'firebase';

/**
 * Generated class for the MyappsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface Item { nombre: string; url: string; img: string; }
@IonicPage()
@Component({
  selector: 'page-myapps',
  templateUrl: 'myapps.html',
})
export class MyappsPage {
  private itemsCollection: AngularFirestoreCollection<Item>
  apps: Observable<Item[]>

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public market:Market,
              public afs: AngularFirestore,) {

                this.apps = afs.collection<Item>('apps').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyappsPage');
  }

  ir(app:any){

    this.market.open(app);

  }

}

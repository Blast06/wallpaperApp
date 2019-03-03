import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Market } from '@ionic-native/market/ngx';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


export interface Item { nombre: string; url: string; appUrl: string; }
@IonicPage()
@Component({
  selector: 'page-myapps',
  templateUrl: 'myapps.html',
})
export class MyappsPage {
  // private itemsCollection: AngularFirestoreCollection<Item>
  apps: Observable<Item[]>

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public market:Market,
              public afs: AngularFirestore,
              public ina: InAppBrowser,) {

                this.apps = afs.collection<Item>('apps').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyappsPage');
  }

  ir(app:any){

    // this.ina.create('market://details?id=' + app);
    // market://details?id=market://details?id=io.com.domiradio
    // this.market.open(app);
    let appUrl = `https://play.google.com/store/apps/details?id=${app}`;

    window.open(appUrl);

  }

}

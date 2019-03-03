import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrivacypoliticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-privacypolitics',
  templateUrl: 'privacypolitics.html',
})
export class PrivacypoliticsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivacypoliticsPage');
  }

  verPoliticas(){
    window.open("https://imagenesteamo.blogspot.com/2019/02/privacy-policy.html")
  }

}

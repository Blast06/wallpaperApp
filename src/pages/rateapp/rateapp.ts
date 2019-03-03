import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppRate } from '@ionic-native/app-rate/ngx';




@IonicPage()
@Component({
  selector: 'page-rateapp',
  templateUrl: 'rateapp.html',
})
export class RateappPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appRate: AppRate) {

    this.showRatePrompt();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RateappPage');
  }

  

  showRatePrompt(){
    this.appRate.preferences.storeAppURL = {
      //ios: '< my_app_id >',
      android: 'market://details?id=com.doublegremlin181.stickerapp'
      //windows: 'ms-windows-store://review/?ProductId=< Store_ID >'
      };
  
      this.appRate.promptForRating(true); 
  }

  
}

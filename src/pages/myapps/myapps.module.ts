import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyappsPage } from './myapps';
import { Market } from '@ionic-native/market/ngx';

@NgModule({
  declarations: [
    MyappsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyappsPage),
  ],
  providers: [
    Market
  ]
})
export class MyappsPageModule {}

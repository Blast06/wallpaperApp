
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


//providers


//plugins
import { HTTP } from '@ionic-native/http/ngx';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { File } from '@ionic-native/file';
import { FileTransfer } from "@ionic-native/file-transfer";
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Base64 } from '@ionic-native/base64/ngx';
import { AppRate } from '@ionic-native/app-rate/ngx';




//firebase
import { firebase } from './../firebase';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';

//Pages
import { ImagenPageModule } from '../pages/imagen/imagen.module';
import { MyappsPageModule } from './../pages/myapps/myapps.module';
import { GalleryPageModule } from './../pages/gallery/gallery.module';
import { Market } from '@ionic-native/market/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HomePageModule } from '../pages/home/home.module';
import { RateappPage } from '../pages/rateapp/rateapp';
import { AboutPage } from '../pages/about/about';
import { PrivacypoliticsPage } from '../pages/privacypolitics/privacypolitics';



@NgModule({
  declarations: [
    MyApp,
    RateappPage,
    AboutPage,
    PrivacypoliticsPage
    

    
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    GalleryPageModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    // AngularFirestoreModule.enablePersistence(),
    ImagenPageModule,
    GalleryPageModule,
    MyappsPageModule,
    HomePageModule,
    
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RateappPage,
    AboutPage,
    PrivacypoliticsPage
    
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient,
    AngularFirestore,
    File,
    HTTP,
    FileTransfer,
    AndroidPermissions,
    SocialSharing,
    Base64,
    Market,
    InAppBrowser,
    AppRate,
    
  
    
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}

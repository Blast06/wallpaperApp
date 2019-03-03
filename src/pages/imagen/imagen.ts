

import { Base64 } from '@ionic-native/base64/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//library for social-sharing
import { SocialSharing } from '@ionic-native/social-sharing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';












@IonicPage()
@Component({
  selector: 'page-imagen',
  templateUrl: 'imagen.html',
})
export class ImagenPage {

  fileTransfer: FileTransferObject = this.transfer.create();

  imagen: string;
  appPath: string;
  dataPath: string;
  img_to_share: any;
  date = new Date();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private transfer: FileTransfer,
    private file: File,
    public androidPermissions: AndroidPermissions,
    public sShare: SocialSharing,
    public platform: Platform,
    public http: HTTP,
    public base64: Base64) {

    this.imagen = this.navParams.get('imagen');
  }

  ionViewDidLoad() {
    // Set paths
    this.definePaths();
  }


  downloadImagen(imagen: any) {
    const url = imagen;
    this.fileTransfer.download(url, this.file.externalRootDirectory + '/Download/' + 'imagen.jpg').then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
      console.log(JSON.stringify(error));
    });
  }


  definePaths() {
    if (this.platform.is('ios')) {
      this.appPath = this.file.documentsDirectory;
      this.dataPath = this.file.documentsDirectory;

    } else {
      this.appPath = this.file.applicationDirectory;
      this.dataPath = this.file.dataDirectory;

    }



  }



  // TODO 
  // test app on other phones 




  descargar(imagen: string) {

    const fileTransfer: FileTransferObject = this.transfer.create();
    let targetPath = this.file.externalRootDirectory + "download/" + "imagen" + this.date.getMilliseconds().toString() + ".jpg";
    fileTransfer.download(imagen, targetPath, true).then((entry) => {
      console.log("Descarga completa: ", entry.toURL() );
      this.img_to_share = entry.toURL();
      this.sShare.share("Ejemplo","Subject",entry.toURL()).then( () => {
        console.log("Se compartio la imagen");
      }).catch( (err) => {
        console.log("Hubo un error");
      }); 
    }, (error) => {
      this.checkPermissions();
    });
  }

  checkPermissions() {
    this.androidPermissions.requestPermissions(
      [
        this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
        this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
      ]
    );


  }














}

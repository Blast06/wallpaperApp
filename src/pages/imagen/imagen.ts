import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-imagen',
  templateUrl: 'imagen.html',
})
export class ImagenPage {

  fileTransfer: FileTransferObject = this.transfer.create();

  imagen:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private transfer: FileTransfer, private file: File) {

    this.imagen = this.navParams.get('imagen');
  }


  descargar(imagen:string) {
    const url = imagen;
    this.fileTransfer.download(url, this.file.dataDirectory + imagen ).then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      console.log(error);
    });
  }



}

import { AlbumsProvider } from './../../providers/albums/albums';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tracks:any[];
  constructor(public navCtrl: NavController,
              public alb:AlbumsProvider) {

                this.getAlb();

  }

  getAlb()
  {

    /*

    LEE ESTO:

    en la linea 31 cuando llamo al metodo que esta en el provider, utilizando la libreria httpclient.
    fijate bien como accedo al objeto despues del subscribe pongo "data:any" porque asi no me dara erro el 
    editor al utilizar acciones como en la linea 35 "data.data", aunque tambien se puede acceder a partes de un
    objeto de la manera que vez en la linea 36, que incluso puede ser mejor en muchos casos.
    En las otras lineas fui entrando mas al objeto hasta llegar donde decias. Despues lo imprimo en el console.log
    para que veas como queda. Y despues lo hago con un foreach recorriendolos.


    DOS cosas:

    en la vista, lo haras de otra forma, no con un foreach, lo haras con un NgFor(de este lado no se usa ngfor)
    
    la otra es....

    que se pudo haber hecho algo como esto:

    this.tracks =data.data.0.tracks.data;

    pero bueeno, se ve raro no?

    */


    this.alb.getDataTracksOne().subscribe((data:any) => {
      console.log(data.data);
      this.tracks = data.data['0'];
      this.tracks = this.tracks['tracks'];
      this.tracks = this.tracks['data'];

      console.log(this.tracks);

      this.tracks.forEach((track) => {
        console.log(track.title_short);
      })

    })
  }



  

}

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

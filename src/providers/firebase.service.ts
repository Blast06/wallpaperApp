import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Imagen } from '../models/imagen.model';

@Injectable()
export class FirebaseService {

  Imagen: Observable<Imagen[]>;

  estadoChange: boolean = false;
  

  constructor( private afs: AngularFirestore ) { }

  getImages(categoria: string) {
    this.Imagen = this.afs.collection(categoria).snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Imagen;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    return this.Imagen;
  }






  

}
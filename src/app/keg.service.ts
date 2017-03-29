import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class KegService {
  kegs: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.kegs = angularFire.database.list('kegs');
  }

  getKegs(){
    return this.kegs;
  }

  findKeg(keg){
    var kegId = keg.$key
    return this.angularFire.database.object('/kegs/' + kegId);
  }

  sellPint(keg, newSize){
    var keginFB = this.findKeg(keg);
    keginFB.update({size:newSize})
  }
}

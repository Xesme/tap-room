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
}

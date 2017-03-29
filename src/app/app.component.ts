import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { KegService } from './keg.service';
// declare var firebase:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [KegService]
})
export class AppComponent implements OnInit {
  kegs: FirebaseListObservable<any[]>;

  constructor (private kegService: KegService ) { }
  // kegs: Keg[] = [];
  ngOnInit(){
    // firebase.database().ref("/kegs/").on("child_added", (snapshot) => {this.kegs.push(snapshot.val())});
    this.kegs = this.kegService.getKegs();
  }

  // sellPint(keg:Keg){
  //   var pos = this.kegs.indexOf(keg);
  //   // console.log(pos);
  //   keg.size = keg.size -1;
  //   firebase.database().ref("/kegs/1").set({
  //     name: keg.name,
  //     brewery: keg.brewery,
  //     price: keg.price,
  //     tapped: keg.tapped,
  //     inventory: keg.inventory,
  //     origin: keg.origin,
  //     size: keg.size,
  //     alcholContent: keg.alcholContent
  //   })
  //   // console.log(firebase.database().ref("/kegs"));
  // }

  // create(){
  //   firebase.database().ref("/kegs/").push({dasd:dasda});
  // }

}

export class Keg {
  public tapped: boolean = false;
  constructor(public name: string, public brewery: any, public alcholContent: string, public price: number, public size: number, public origin: string, public inventory: number) { }
}

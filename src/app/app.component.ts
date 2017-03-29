import { Component, OnInit } from '@angular/core';
// import { AngularFire, FirebaseListObservable } from 'angularfire2';
declare var firebase:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // kegs: FirebaseListObservable<any[]>;
  kegs: Keg[] = [
    // new Keg("Blind Pig - IPA", "Russian River", "6.1%", 5, 8, "CA"),
    // new Keg("Bone-A-Fide - Pale", "Boneyard", "5.5%", 5, 8, "BND"),
    // new Keg("Saison Dupont", "Dupont", "6.5%", 6, 8, "BEL")
  ];
  ngOnInit(){
    firebase.database().ref("/kegs/").on("child_added", (snapshot) => {this.kegs.push(snapshot.val())});
  }

  // create(){
  //   firebase.database().ref("/kegs/").push({dasd:dasda});
  // }

}

export class Keg {
  public tapped: boolean = false;
  constructor(public name: string, public brewery: any, public alcholContent: string, public price: number, public size: number, public origin: string) { }
}

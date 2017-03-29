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
  ngOnInit(){
    this.kegs = this.kegService.getKegs();
  }

  sellPint(keg:Keg){
    keg.size = keg.size -1;

    this.kegService.sellPint(keg, keg.size)
  }

}

export class Keg {
  public tapped: boolean = false;
  constructor(public name: string, public brewery: any, public alcholContent: string, public price: number, public size: number, public origin: string, public inventory: number) { }
}

import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { KegService } from './keg.service';
import { EditKegComponent } from './edit-keg/edit-keg.component';
// declare var firebase:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [KegService]
})
export class AppComponent implements OnInit {
  kegs: FirebaseListObservable<any[]>;
  selectedKeg;
  style;

  constructor (private kegService: KegService ) { }
  ngOnInit(){
    this.kegs = this.kegService.getKegs();
  }

  checkColor(keg){
    if (keg.size==0) {
        return "dead";
    }else if(keg.size<10){
      return "almost";
    }else{
      return "g2g";
    }
  }

  showKeg(keg:Keg){
    if(this.selectedKeg == keg.name){
      this.selectedKeg = null
    }else{
      this.selectedKeg = keg.name;
    }
  }

  showLog(){
    console.log(this.selectedKeg)
  }

  sellPint(keg:Keg){
    keg.size = keg.size -1;

    this.kegService.sellPint(keg, keg.size)
    console.log(this.selectedKeg);
  }

  sellGrowler(keg:Keg){
    keg.size = keg.size -2;

    this.kegService.sellGrowler(keg, keg.size)
  }

  sellLgGrowler(keg:Keg){
    keg.size = keg.size -4;

    this.kegService.sellLgGrowler(keg, keg.size)
  }

  kegInv(keg:Keg){
    keg.inventory = keg.inventory - 1;
    this.kegService.kegInv(keg, keg.inventory)

  }

  editKeg($event){
    // alert($event.brewery);
    this.kegService.editKeg($event);
  }

  deleteKeg(keg:Keg){
    this.kegService.deleteKeg(keg);
  }

  addKeg($event){
    this.kegService.addKeg($event);
  }

  openModal(keg){
    console.log(keg)
  }

  progress(keg) {
    var progressKeg = (parseInt(keg.size) / 66)*100;
    var style = "width: " + Math.round(progressKeg) + "%";
    console.log(style);
    return style;
  }

}

export class Keg {
  public tapped: boolean = false;
  public display: boolean = false;
  constructor(public name: string, public brewery: any, public alcholContent: string, public price: number, public size: number, public origin: string, public inventory: number) { }
}

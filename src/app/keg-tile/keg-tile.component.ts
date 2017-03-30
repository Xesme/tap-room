import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from "./../app.component";

@Component({
  selector: 'app-keg-tile',
  templateUrl: './keg-tile.component.html',
  styleUrls: ['./keg-tile.component.css']
})
export class KegTileComponent {
  @Output() clickSender = new EventEmitter();
  @Input() keg: Keg;
  // selectedKeg

  // showLog(){
  //   console.log(this.selectedKeg)
  // }

  // showKeg(keg:Keg){
  //   if(this.selectedKeg == keg){
  //     this.selectedKeg = null
  //   }else{
  //     this.selectedKeg = keg;
  //   }
  // }

  sellPint(keg:Keg){
    keg.size = keg.size -1;
    var event = {
      keg: keg,
      size: keg.size
    }
    console.log(keg)
    this.clickSender.emit(event);
    // console.log(this.selectedKeg);
  }

  sellGrowler(keg:Keg){
    keg.size = keg.size -2;
    var event = {
      keg: keg,
      size: keg.size
    }
    this.clickSender.emit(event);
  }

  sellLgGrowler(keg:Keg){
    keg.size = keg.size -4;
    var event = {
      keg: keg,
      size: keg.size
    }
    this.clickSender.emit(event);
  }

}

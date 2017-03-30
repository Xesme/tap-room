import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent {

  @Output() clickSender = new EventEmitter();

  addKeg(name, brewery, origin, price, abv, inv){
    var event = {
      name: name,
      brewery: brewery,
      origin: origin,
      price: price,
      abv: abv,
      inv: inv
    }
    this.clickSender.emit(event);
  }
}

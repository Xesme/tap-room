import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from "./../app.component";

@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent {
  @Output() clickSender = new EventEmitter();
  @Input() keg: Keg;
  // modalId="editModal"+this.keg.$key;

  editKeg(name, brewery, origin, price, abv, inv, keg){
    console.log(keg)
    var event = {
      name: name,
      brewery: brewery,
      origin: origin,
      price: price,
      abv: abv,
      inv: inv,
      keg: keg
    }
    this.clickSender.emit(event);
  }

  openModal(keg){
    var elem = document.getElementById("editModal-"+keg.$key);
    elem.className = "modal show";
  }

  closeModal(keg){
    var elem = document.getElementById("editModal-"+keg.$key);
    elem.className = "modal fade";
  }
}

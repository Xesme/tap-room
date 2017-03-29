import { Pipe, PipeTransform } from '@angular/core';
import {Keg} from './app.component';

@Pipe({
  name: 'filterTapped',
  pure: false
})
export class FilterTappedPipe implements PipeTransform {

  transform(input: Keg[]) {
    var output: Keg[] = [];
    for (var i = 0; i < input.length; i++) {
      if(input[i].tapped !== true){
        output.push(input[i]);
      }
    }
    return output;
  }

}

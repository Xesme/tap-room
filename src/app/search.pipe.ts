import { Pipe, PipeTransform } from '@angular/core';
import {Keg} from './app.component';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(input: Keg[]) {
    var output: Keg[] = [];
    for (var i = 0; i < input.length; i++) {
      console.log(input[i])
      if(input[i].tapped == true){
        output.push(input[i]);
      }
    }
    return output;
  }

}

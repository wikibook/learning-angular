import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'censor'
})
export class CensorPipe{
  transform(input:string, replacement:string) : string {
    var cWords = ["bad", "rotten", "terrible"];
    var out = input;
    for(var i=0; i<cWords.length; i++){
      out = out.replace(cWords[i], replacement);
    }
    return out
  }
}

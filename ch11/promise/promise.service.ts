import { Injectable } from '@angular/core';

@Injectable()
export class PromiseService {

  createTimedAlert(seconds: number): Promise<any>{
    return new Promise((resolve, reject) =>{
      resolve(setTimeout(function(){
          alert('this alert took ' + seconds + ' seconds to load');
        }, (seconds * 1000))
      );
    })
  }
}

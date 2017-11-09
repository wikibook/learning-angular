import { Injectable } from '@angular/core';

@Injectable()
export class PiService {
  getPi(){
    return Math.PI;
  }
}
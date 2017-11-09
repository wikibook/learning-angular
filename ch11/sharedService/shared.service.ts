import { Injectable } from '@angular/core';
 
import { Observable }     from 'rxjs/Observable';
import 'rxjs';

export class character {
  name: string;
  race: string;
  alignment: string;
  health: number;
}

@Injectable()
export class SharedService{
characters: character[] = [
      {
        name: 'Aragon',
        race: 'human',
        alignment: 'good',
        health: 100
      },
      {
        name: 'Legolas',
        race: 'elf',
        alignment: 'good',
        health: 100
      },
      {
        name: 'Gimli',
        race: 'Dwarf',
        alignment: 'good',
        health: 100
      },
      {
        name: 'Witch King',
        race: 'Wraith',
        alignment: 'bad',
        health: 100
      },
      {
        name: 'Lurtz',
        race: 'Uruk-hai',
        alignment: 'bad',
        health: 100
      },
      {
        name: 'Sarumon',
        race: 'Wizard',
        alignment: 'bad',
        health: 100
      },
    ];
  charObservable: Observable<character[]>;
  observer;
  constructor(){
    this.charObservable = new Observable(observer => {
      this.observer = observer;
      this.observer.next(this.characters);
    })
  }

  getCharacters(): Observable<character[]>{
    return this.charObservable;
  }

  hitCharacter(character, damage){

    var index = this.characters.indexOf(character, 0);
      if(index > -1){
        this.characters[index].health -= damage;
        if(this.characters[index].health <= 0){
           this.characters.splice(index, 1);  
        }
    }
    this.observer.next(this.characters);
  }
}

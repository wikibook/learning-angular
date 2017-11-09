import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  character = null;

  characters = [{name: 'Frodo', weapon: 'Sting', 
                           race: 'Hobbit'},
                {name: 'Aragorn', weapon: 'Sword', 
                             race: 'Man'},
                {name:'Legolas', weapon: 'Bow', 
                             race: 'Elf'},
                {name: 'Gimli', weapon: 'Axe', 
                           race: 'Dwarf'}
  ]

  selectCharacter(character){
    this.character = character;
  }
  deleteChar(event){
    var index = this.characters.indexOf(event);
    if(index > -1) {
      this.characters.splice(index, 1);
    }
    this.character = null;
  }

}
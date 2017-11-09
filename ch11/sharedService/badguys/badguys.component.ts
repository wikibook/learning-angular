import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-badguys',
  templateUrl: './badguys.component.html',
  styleUrls: ['./badguys.component.css']
})

export class BadguysComponent implements OnInit {
  @Input('shared') shared;
  characters: Array<any>;
  constructor(){ }

  ngOnInit(){
   this.shared.getCharacters().subscribe(
      characters => this.characters = characters
    );
  }
  hitCharacter(character, damage){
    this.shared.hitCharacter(character, damage);
  }
}


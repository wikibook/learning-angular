import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharacterComponent {

  @Input('character') character: any;
  @Output() CharacterDeleted  = new EventEmitter<any>();

  deleteChar(){
    this.CharacterDeleted.emit(this.character);
  }

}

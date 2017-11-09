import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  template: `
    <button (click)="clicked()" (mouseleave)="mouseleave()">
      Click Me
    </button>
  `,
  styleUrls: ['child.component.css']
})
export class ChildComponent {
  private message = "";

  @Output() myCustomEvent: EventEmitter<any> = new EventEmitter();

  clicked() {
    this.message = "You've made a custom event";
    this.myCustomEvent.emit(this.message);
  }

  mouseleave(){
    this.message = "";
    this.myCustomEvent.emit(this.message);
  }
}
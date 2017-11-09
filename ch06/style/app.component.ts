import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <span [style.border]="myBorder">Hey there</span>
    <div [style.color]="twoColors ? 'blue' : 'forestgreen'">
      what color am I
    </div>
    <button (click)="changeColor()">click me</button>
  `
})
export class AppComponent {
  twoColors: boolean = true;
  changeColor = function(){
    this.twoColors = !this.twoColors;
  }
  myBorder = "1px solid black";
}

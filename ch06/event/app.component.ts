import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div (mousemove)="move($event)">
      <img [src]="imageUrl" 
        (mouseenter)="mouseGoesIn()" 
        (mouseleave)="mouseLeft()" 
        (dblclick)="changeImg()" /><br>
        double click the picture to change it<br>
        The Mouse has {{mouse}}<hr>
      <button (click)="changeImg()">Change Picture</button><hr>
      <input (keyup)="onKeyup($event)" 
        (keydown)="onKeydown($event)" 
        (keypress)="keypress($event)"
        (blur)="underTheScope($event)"
        (focus)="underTheScope($event)">
        {{view}}
      <p>On key up: {{upValues}}</p>
      <p>on key down: {{downValues}}</p>
      <p>on key press: {{keypressValue}}</p>
      <p (mousemove)="move($event)">
        x coordinates: {{x}}
        <br> y coordinates: {{y}}
      </p>
    </div>
  `,
  styles: [`
    img {
      width: auto;
      height: 300px;
    }
  `]
})
export class AppComponent {
  counter = 0;
  mouse: string;
  upValues: string = '';
  downValues: string = '';
  keypressValue: string = "";
  x: string = "";
  y: string = '';
  view: string = '';

  mouseGoesIn = function(){
    this.mouse = "entered";
  };
  mouseLeft = function(){
    this.mouse = "left";
  }
  imageArray: string[] = [
    "../assets/images/flower.jpg",
    "../assets/images/lake.jpg", //extensions are case sensitive
    "../assets/images/mountain.jpg",
  ]
  imageUrl: string = this.imageArray[this.counter];
  changeImg = function(){
    if(this.counter < this.imageArray.length - 1){
      this.counter++;
    }else{
      this.counter = 0;
    }
    this.imageUrl=this.imageArray[this.counter];
  }
  onKeyup(event:any){
    this.upValues = event.key;
    //this.upValues += event.target.value + ' | ';
  }
  onKeydown(event:any){
    this.downValues = event.key;
    //this.downValues += event.target.value + " | ";
  }
  keypress(event:any){
    this.keypressValue = event.key;
    //this.keypressValue += event.target.value + " | ";
  }
  move(event:any){
    this.x = event.clientX;
    this.y = event.clientY;
  }
  underTheScope(event:any){
    if(event.type == "focus"){
      this.view = "the text box is focused";
    }
    else if(event.type == "blur"){
      this.view = "the input box is blurred";
    }
    console.log(event);
  }
}

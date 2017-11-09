import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div [class]="myCustomClass"></div>
    <span [class.redText]="isTrue">Hello my blue friend</span>
  `,
  styles: [`
    .blueBox {
      height: 150px;
      width: 150px;
      background-color: blue;
    }
    .redText{
      color: red;
      font-size: 24px;
    }
  `] 
})
export class AppComponent {
  myCustomClass: string = 'blueBox';
  isTrue = true;
}

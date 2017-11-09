import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Expressions</h1>
    Array:<br>
      {{myArr.join(', ')}}<br/>
      <hr>
    Elements removed from array:<br>
      {{removedArr.join(', ')}}<hr> 
    <a (click)="myArr.push(myMath.floor(myMath.random()*100+1))">
      Click to append a value to the array
    </a><hr> 
    <a (click)="removedArr.push(myArr.shift())">
      Click to remove the first value from the array
    </a><hr>
    Size of Array:<br>
      {{myArr.length}}<hr>
    Max number removed from the array:<br>
      {{myMath.max.apply(myMath, removedArr)}}<hr>
  `,
  styles: [`
    a {
      color: blue;
      cursor: pointer;
    }
  `],
})
export class AppComponent {
  myMath = Math;
  myArr: number[] = [1];
  removedArr: number[] = [0];
}

import { Component } from '@angular/core';
import { AreaCalcService } from './area-calc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AreaCalcService ]
})
export class AppComponent {
  circleRadius: number = 0;
  squareBase: number = 0;
  rectangleBase: number = 0;
  rectangleHeight: number = 0;
  triangleBase: number = 0;
  triangleHeight: number = 0;
  trapezoidBase1: number = 0;
  trapezoidBase2: number = 0;
  trapezoidHeight: number = 0;

  constructor(private areaCalc: AreaCalcService){ }

  doCircle(){
    return this.areaCalc.circle(this.circleRadius);
  }
  doSquare(){
    return this.areaCalc.square(this.squareBase);
  }
  doRectangle(){
    return this.areaCalc.rectangle(this.rectangleBase, this.rectangleHeight);
  }
  doTriangle(){
    return this.areaCalc.triangle(this.triangleBase, this.triangleHeight);
  }
  doTrapezoid(){
    return this.areaCalc.trapezoid(this.trapezoidBase1, 
                                   this.trapezoidBase2, 
                                   this.trapezoidHeight);
  }
}

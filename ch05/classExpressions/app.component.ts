import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Directly accessing variables in the component:<br>
      {{speed}} {{vehicle}}<hr>
    Adding variables in the component:<br>
      {{speed + ' ' + vehicle}}<hr>
    Calling functions in the component:<br>
      {{lower(speed)}} {{upper('Jeep')}}<hr>
    <a (click)="setValues('Fast', newVehicle)">
      Click to change to Fast {{newVehicle}}</a><hr>
    <a (click)="setValues(newSpeed, 'Rocket')">
      Click to change to {{newSpeed}} Rocket</a><hr>
    <a (click)="vehicle='Car'">
      Click to change the vehicle to a Car</a><hr>
    <a (click)="vehicle='Enhanced ' + vehicle">
      Click to Enhance Vehicle</a><hr>
  `,
  styles:[`
    a{color: blue; text-decoration: underline; cursor: pointer}
  `]
})
export class AppComponent {
  speed = 'Slow';
  vehicle = 'Train';
  newSpeed = 'Hypersonic';
  newVehicle = 'Plane';
  upper = function(str: any){
    str = str.toUpperCase();
    return str;
  }
  lower = function(str: any){
    return str.toLowerCase();
  }
  setValues = function(speed: any, vehicle: any){
    this.speed = speed;
    this.vehicle = vehicle;
  }
}

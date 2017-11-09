import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="condition">condition met</div>
    <div *ngIf="!condition">condition not met</div>
    <button (click)="changeCondition()">Change Condition</button>
    <hr>
    <template ngFor let-person [ngForOf]="people">
      <div>name: {{person}}</div>
    </template>
    <hr>
    <h3>Monsters and where they live</h3>
    <ul *ngFor="let monster of monsters">
        {{monster.name}}:  
        {{monster.location}}
    </ul>
    <hr>
    <div [ngSwitch]="time">
      <span *ngSwitchCase="'night'">Its night time
      <button (click)="changeDay()">change to day</button>
      </span>
      <span *ngSwitchDefault>Its day time
      <button (click)="changeNight()">change to night</button></span>
    </div>
  `
})
export class AppComponent {
  condition: boolean = true;
  changeCondition = function(){
    this.condition = !this.condition;
  }
  changeDay = function(){
    this.time = 'day';
  }
  changeNight = function(){
    this.time = 'night'
  }
  people: string[] = [
    "Andrew", "Dillon", "Philipe", "Susan"
  ]
  monsters = [
    { name: "Nessie",
      location: "Loch Ness, Scotland" },
    { name: "Bigfoot",
      location: "Pacific Northwest, USA" },
    { name: "Godzilla",
      location: "Tokyo, sometimes New York" }
  ]
  time: string = 'night';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form #character="ngForm" novalidate>
        <span>name:</span><input name="name" [(ngModel)]="charName"><br>
        <span>color:</span>
        <input type="checkbox" (click)="enabler()">
        <select #optionColor [(ngModel)]="color" name="color" [disabled]="isDisabled">
            <option *ngFor="let color of colors" [value]="color">{{color}}</option>
        </select><hr>
        <span>Change Class</span><br>
        <select #classOption multiple name="styles" (change)="addClass($event)">
            <option *ngFor="let class of classes" [value]="class" >{{class}}</option>
        </select><br>
        <span>press and hold control/command<br>to select multiple options</span>
    </form>
    <hr>
    <span>Name: {{charName}}</span><br>
    <span [ngClass]="selectedClass" 
          [ngStyle]="{'color': optionColor.value}">
            color: {{optionColor.value}}
    </span><br>
  `,
  styles: [`
    .bold {
      font-weight: bold;
    }
    .italic {
      font-style: italic;
    }
    .highlight {
      background-color: lightblue;
    }
  `]
 })
export class AppComponent {
    colors: string[] = ["red", "blue", "green", "yellow"];
    weapon: string;
    charName: string;
    color: string = 'color';
    isDisabled: boolean = true;
    classes:string[] = ['bold', 'italic', 'highlight'];
    selectedClass:string[] = [];
    enabler(){
      this.isDisabled = !this.isDisabled;
    }
    addClass(event: any){
      this.selectedClass = [];
      var values = event.target.options;
      var opt: any;

      for (var i=0, iLen = values.length; i<iLen; i++){
        opt = values[i];

        if (opt.selected){
          this.selectedClass.push(opt.text);
        }
      }
    }
}
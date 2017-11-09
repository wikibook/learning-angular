import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input [(ngModel)]="text"><br>
    <input bindon-ngModel="text"><br>
    <input [value]="text" (input)="text=$event.target.value">
    <h1>{{text}}</h1>
  `
})
export class AppComponent {
  text: string = "some text here";
}

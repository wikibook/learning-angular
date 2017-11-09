import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <span>Hello my name is Brendan</span>
  `,
  styles:[`
    span {
      font-weight: bold;
      border: 1px ridge blue;
      padding: 5px;
    }
  `]
})
export class AppComponent {
  title = 'Chapter 4 Intro';
}

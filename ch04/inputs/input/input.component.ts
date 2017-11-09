import { Component, Input } from '@angular/core';

@Component({
  selector: 'myInput',
  template: `
    <div>
      Name: {{personName}}
      <br />
      Job: {{occupation}}
    </div>
  `,
  styles: [`
    div {
      margin: 10px;
      padding: 15px;
      border: 3px solid grey;
    }
  `]
})
export class InputComponent {
  @Input('name') personName: string;
  @Input('occupation') occupation: string;
  constructor() {
    this.personName = "John Doe";
    this.occupation = "Anonymity"
  }
}

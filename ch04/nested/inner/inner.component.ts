import { Component } from '@angular/core';

@Component({
  selector: 'nested',
  template: `
    <span>Congratulations I'm a nested component</span>
  `,
  styles: [`
    span{
      color: #228b22;
    }
  `]
})
export class InnerComponent {}

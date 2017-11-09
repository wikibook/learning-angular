import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Expressions</h1>
    Number:<br>
    {{5}}<hr>
    String:<br>
    {{'My String'}}<hr>
    Adding two strings together:<br> 
    {{'String1' + ' ' + 'String2'}}<hr>
    Adding two numbers together:<br>
    {{5+5}}<hr>
    Adding strings and numbers together:<br>
    {{5 + '+' + 5 + '='}}{{5+5}}<hr>
    Comparing two numbers with each other:<br>
    {{5===5}}<hr>
  `,
})
export class AppComponent {}

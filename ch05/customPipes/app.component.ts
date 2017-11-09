import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{phrase | censor:"*****"}}
  `
})
export class AppComponent {
  phrase:string="This bad phrase is rotten ";
}

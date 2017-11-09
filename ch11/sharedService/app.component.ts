import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ SharedService ]
})
export class AppComponent {
  constructor(
     public shared: SharedService
  ){}
}
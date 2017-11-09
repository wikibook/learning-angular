import { Component } from '@angular/core';
import { PromiseService } from './promise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [PromiseService]
})
export class AppComponent {
  seconds: number = 0;
  constructor(
    private alert: PromiseService
  ){}

  createAlert(){
    this.alert.createTimedAlert(this.seconds);
  }
}

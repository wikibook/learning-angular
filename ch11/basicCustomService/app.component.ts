import { Component, OnInit } from '@angular/core';
import { PiService } from './pi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ PiService ]
})
export class AppComponent implements OnInit {
  pi: number;
  constructor(
    private PiService: PiService
  ){}
  ngOnInit(){
    this.pi = this.PiService.getPi();;
  }
}

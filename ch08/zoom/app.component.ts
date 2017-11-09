import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images: string[] = [
    '../assets/images/jump.jpg',
    '../assets/images/flower2.jpg',
    '../assets/images/cliff.jpg'
  ]
}
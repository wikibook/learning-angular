import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  images: any = [
    {
      src: "../assets/images/angelsLanding.jpg",
      title: "Angels Landing",
      description: "A natural wonder in Zion National Park Utah, USA"
    },
    {
      src: "../assets/images/pyramid.jpg",
      title: "Tikal",
      description: "Mayan Ruins, Tikal Guatemala"
    },
    {
      src: "../assets/images/sunset.jpg"
    },
  ]
}
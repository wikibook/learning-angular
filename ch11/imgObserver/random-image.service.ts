import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';

@Injectable()
export class RandomImageService {
  imageChange: Observable<any>;
  private images = [
    { 
      url: '../../assets/images/angelsLanding.jpg',
      title: "Angels Landing"
    },
    { 
      url: '../../assets/images/lake.jpg',
      title: "Lake"
    },
    { 
      url: '../../assets/images/cliff.jpg',
      title: "Cliff"
    },
    { 
      url: '../../assets/images/jump.jpg',
      title: "Jump"
    },
    { 
      url: '../../assets/images/flower.jpg',
      title: "Flower"
    },
    { 
      url: '../../assets/images/sunset.jpg',
      title: "Sunset"
    },
  ];
  constructor() { 
    this.imageChange = new Observable(observer => {
        this.changeLoop(observer);        
      });
  }
  changeLoop(observer){
    setTimeout(() => {
      let imgIndex = this.getRandom(0,6);
      let image = this.images[imgIndex];
      observer.next(
        {
          url: image.url,
          title: image.title,
          width: this.getRandom(200,400)
        }
      );
      this.changeLoop(observer);
    }, this.getRandom(100,1000));
  }
  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  getRandomImage(): Observable<any> {
    return this.imageChange;
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Subscription } from 'rxjs/Subscription';
import { RandomImageService } from './random-image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ RandomImageService ]
})
export class AppComponent {
  randomImage: Observable<any>;
  imageInfo: any;
  imageHistory: any[] = [];
  constructor(
    private randomImages: RandomImageService
  ){
     this.imageInfo = { 
      url: '',
      title: 'Loading . . .',
      width: 400
    }; 
  }
  ngOnInit(){
    this.randomImage = this.randomImages.getRandomImage();
    this.randomImage.subscribe(
      imageData => {        
        this.imageInfo = imageData;
        this.imageHistory.push(imageData);
      });
  }
}

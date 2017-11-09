import { Component, OnInit, Input } from '@angular/core';
import { RatingsService } from '../ratings.service';

@Component({
  selector: 'rated-item',
  templateUrl: './rated-item.component.html',
  styleUrls: ['./rated-item.component.css']
})
export class RatedItemComponent implements OnInit {
  @Input ("item") item: any;
  @Input ("ratingsService") ratingsService: RatingsService;
  starArray: number[];
  constructor() {
    this.starArray = [1,2,3,4,5];
  }
  ngOnInit() {
  }
  setRating(rating){
    this.ratingsService.updateRating(this.item, rating);
  }
  getStarClass(rating){
    if(rating <= this.item.rating){
      return "star";
    } else {
      return "empty";
    }
  }
}
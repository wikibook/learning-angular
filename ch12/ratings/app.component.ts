import { Component } from '@angular/core';
import { RatedItemComponent } from './rated-item/rated-item.component';
import { Observable } from 'rxjs/observable';
import { RatingsService } from './ratings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ RatingsService ]
})
export class AppComponent {
  title = 'app';  
  itemsObservable: Observable<any>;
  items: any[];
  constructor(
    public ratingsService: RatingsService
  ){
    this.items = [];    
  }
  ngOnInit(){
    this.itemsObservable = this.ratingsService.getObservable();
    this.itemsObservable.subscribe(
      itemList => { 
        this.items = itemList;
      });
  }
}
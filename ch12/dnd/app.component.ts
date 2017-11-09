import { Component } from '@angular/core';
import { DragItemComponent} from './drag-item/drag-item.component';
import { DropItemComponent} from './drop-item/drop-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tagList: string[];
  constructor() {    
    this.tagList = [
      'Nature',
      'Landscape',
      'Flora',
      'Sunset',
      'Desert',
      'Beauty',
      'Inspiring',
      'Summer',
      'Fun'
    ]
  }
  ngOnInit() {
  }
}

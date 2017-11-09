import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'drag-item',
  templateUrl: './drag-item.component.html',
  styleUrls: ['./drag-item.component.css']
})
export class DragItemComponent implements OnInit {
  @Input() tag: string;
  constructor() {    
  }
  ngOnInit() {
  }
  onDrag(event) {
    event.dataTransfer.setData('tagData', 
       JSON.stringify({tag: this.tag}));
  }
}

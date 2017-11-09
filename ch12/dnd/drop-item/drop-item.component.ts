import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'drop-item',
  templateUrl: './drop-item.component.html',
  styleUrls: ['./drop-item.component.css']
})
export class DropItemComponent implements OnInit {
  @Input() imgsrc: string;
  tags: string[];
  constructor() {
    this.tags = [];
  }
  ngOnInit() {
  }
  allowDrop(event) {
    event.preventDefault();
  }
  onDrop(event) {
    event.preventDefault();
    let data = JSON.parse(event.dataTransfer.getData('tagData'));
    if (!this.tags.includes(data.tag)){
      this.tags.push(data.tag);
    }    
  }
}

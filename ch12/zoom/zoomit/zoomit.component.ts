import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zoomit',
  templateUrl: './zoomit.component.html',
  styleUrls: ['./zoomit.component.css']
})
export class ZoomitComponent implements OnInit {
  @Input ("zsrc") zsrc: string;
  public pos: string;
  public zUrl: string;  

  ngOnInit() {
    this.zUrl = 'url("' + this.zsrc + '")';
    this.pos = "50% 50%";
  }
  
  imageClick(event: any){
    let element = event.target;
    let posX = Math.ceil(event.offsetX/element.width * 100);
    let posY = Math.ceil(event.offsetY/element.height * 100);
    this.pos = posX +"% " + posY + "%";
  }
}

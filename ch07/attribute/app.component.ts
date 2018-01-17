import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 })
export class AppComponent {
    colors: string[] = ["red", "blue", "green", "yellow"];
    weapon: string;
    charName: string;
    color: string = 'color';
    isDisabled: boolean = true;
    classes:string[] = ['bold', 'italic', 'highlight'];
    selectedClass:string[] = [];
    enabler(){
      this.isDisabled = !this.isDisabled;
    }
    addClass(event: any){
      this.selectedClass = [];
      var values = event.target.options;
      var opt: any;

      for (var i=0, iLen = values.length; i<iLen; i++){
        opt = values[i];

        if (opt.selected){
          this.selectedClass.push(opt.text);
        }
      }
    }
}

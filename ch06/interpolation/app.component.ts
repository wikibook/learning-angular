import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{str1 + ' ' + name}}
    <br>
    <img src="{{imageSrc}}" />
    <br>
    <p>{{str2 + getLikes(likes)}}</p>
  `,
  styles: [`
    img{
      width: 300px;
      height: auto;
    }
    p{
      font-size: 35px;
      color: darkBlue;
    }
  `]
})
export class AppComponent {
  str1: string = "Hello my name is"
  name: string = "Brendan"
  str2: string = "I like to"
  likes: string[] = ['hike', "rappel", "Jeep"]
  getLikes = function(arr: any){
    var arrString = arr.join(", ");
    return " " + arrString
  }
  imageSrc: string = "../assets/images/angelsLanding.jpg"
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Uppercase: {{"Brendan" | uppercase }}<br>
    Lowercase: {{"HELLO WORLD" | lowercase}}<br>
    Date: {{ today | date:'yMMMMEEEEhmsz'}}<br>
    Date: {{today | date:'mediumDate'}}<br>
    Date: {{today | date: 'shortTime'}}<br>
    Number: {{3.1415927 | number:'2.1-5'}}<br>    
    Number: {{28 | number:'2.3'}}<br>
    Currency: {{125.257 | currency:'USD':true: '1.2-2'}}<br>
    Currency: {{2158.925 | currency}}<br>
    Json: {{jsonObject | json}}<br>
    PercentPipe: {{.8888 | percent: '2.2'}}<br>
    SlicePipe: {{"hello world" | slice:0:8}}<br>
    SlicePipe: {{days | slice:1:6}}<br>
    legen...  {{wait | async}} {{dairy | async}}
  `
})
export class AppComponent {
  today = Date.now();
  jsonObject = [{title: "mytitle"}, {title: "Programmer"}];
  days=['Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'];
  wait = new Promise<string>((res, err) => {
    setTimeout(function () {
      res('wait for it...');
    },1000);
  });
  dairy = new Promise<string>((res, err) => {
    setTimeout(function() {
      res('dairy');
    },2000)
  })
}

import { Component } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Http }       from '@angular/http';

import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [];

  constructor(private http: Http){ 
      http.get('../assets/dummyDB.json')
        .toPromise()
        .then((data) => {
          this.users = data.json()
        })
        .catch((err) =>{
          console.log(err);
        })
  }
}

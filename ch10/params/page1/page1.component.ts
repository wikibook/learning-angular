import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html'
})
export class Page1Component {
  text='';
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){ }
  gotoPage2(){
    this.router.navigate(
        ['/page2', this.text], 
        {
          relativeTo: this.route, 
          skipLocationChange: true
        }
    );
  }
}

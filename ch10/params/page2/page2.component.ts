import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html'
})
export class Page2Component implements OnInit {
  text;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
    this.route.params
      .subscribe(text => this.text = text.params);
  }

  goBack(){
    this.router.navigate(['/page1']);
  }
}

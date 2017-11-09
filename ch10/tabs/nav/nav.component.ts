import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{
  pages = [
    { 'url': 'page1', 
     'text': 'page 1'
    },
    { 'url': 'page2', 
     'text': 'page 2'
    },
    { 'url': 'page3', 
     'text': 'page 3'
    }
  ]
}

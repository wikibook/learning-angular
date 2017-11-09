import { Component, OnInit, Input,
         animate, keyframes, state, 
         style, transition, trigger } from '@angular/core';

@Component({
  selector: 'animated',
  templateUrl: './animated.component.html',
  styleUrls: ['./animated.component.css'],
  animations: [
    trigger('fadeState', [
      state('inactive', style({
        transform: 'scale(.5) translateY(-50%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'scale(1) translateY(0)',
        opacity: 1
      })),
      transition('inactive => active', 
                 animate('500ms ease-in')),
      transition('active => inactive', 
                 animate('500ms ease-out'))
    ]),
    trigger('bounceState', [
      transition('void => *', [
        animate(600, keyframes([
          style({ opacity: 0, 
                  transform: 'translateY(-50px)' }),
          style({ opacity: .5, 
                  transform: 'translateY(50px)' }),
          style({ opacity: 1, 
                  transform: 'translateY(0)' }),
        ]))
      ])
    ])
  ]
})
export class AnimatedComponent implements OnInit {
  @Input ("src") src: string;
  @Input ("title") title: string;
  state: string = 'inactive';
  constructor() { }
  ngOnInit() {
  }
  enter(){
    this.state = 'active';
  }
  leave(){
    this.state = 'inactive';
  }
}

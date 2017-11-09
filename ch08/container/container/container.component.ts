import { Component, Input, Output } from '@angular/core';
@Component({
  selector: '[container]',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  @Input() title: string;
  @Input() description: string;
}

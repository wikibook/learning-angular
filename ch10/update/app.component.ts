import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';

import 'rxjs/Rx';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  users = [];
  selectedUser;

  constructor(private UserService: UserService){ }

  ngOnInit(){
    this.getUsers()
  }

  getUsers(): void {
    this.UserService
        .getUsers()
        .then(users => this.users = users)
  }

  selectUser(user){
    this.selectedUser = user;
  }

  updateUser(user){
    this.selectedUser = null;
    this.UserService.updateUser(user)
    .then(() => this.getUsers());
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Http }       from '@angular/http';

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

  deleteUser(user){
    this.UserService
      .deleteUser(user.id)
      .then(() => {
        this.getUsers();
      });
  }

  createUser(userName, email){
    this.selectedUser = null;
    let user = {
      'userName': userName.trim(),
      'email': email.trim()
    };
    if (!user.userName || !user.email){ 
      return;
    }
    this.UserService.createUser(user)
        .then(res => {
          this.users.push(res);
        })
  }
}

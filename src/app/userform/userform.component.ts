import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  user = {
    name: 'Ram',
    age: 10,
    gender: "Male"
  }
  users = [];
  save() {
    const observable = this.userService.createUser(this.user);
    observable.subscribe((response: any) => {//success handler
      console.log(response);
      this.users.push(response);
    },
      function (error) { //error handler
        alert('something went wrong. Please try again.')
      });
  }
  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}

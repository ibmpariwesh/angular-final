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
  save() {
    const observable = this.userService.createUser(this.user);
    observable.subscribe(response => {
      console.log(response);
      
    })
    console.log(event);
    console.log(this.user.name);
  }
  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}

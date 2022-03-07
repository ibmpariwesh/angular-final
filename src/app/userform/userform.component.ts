import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  isOpen = false; 
  subjects: any[] = [];//state
  user = {
    name: 'Ram',
    age: 10,
    gender: "Male",
    dob: new Date(),
    subject:''
  }
  users = [];
  deleteRow(user, index) {
    const observable = this.userService.deleteUser(user);
    observable.subscribe((response: any) => {//success handler
      console.log(response);
      this.users.splice(index, 1);
      this.isOpen = true;
    });
  }
  save() {
    this.user.dob = new Date(this.user.dob);
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
    console.log('init');
    const observable = this.userService.getSubjects();
    observable.subscribe((response: any) => {//arrow functions
      console.log(response);
      this.subjects = response;
    })
  }

}

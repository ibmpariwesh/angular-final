import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  user = {
    name: 'Ram',
    age: 10
  }
  save() {
    console.log(event);
    console.log(this.user.name);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

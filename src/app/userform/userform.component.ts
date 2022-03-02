import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  user = {
    name:'Ram'
  }
  save(){
    console.log(event);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

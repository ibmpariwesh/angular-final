import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = "http://localhost:3000/users/";
  getSubjects() {
    return this.http.get("http://localhost:3000/subjects");
  }
  deleteUser(user: any) {
    return this.http.delete(this.BASE_URL + user.id);
  }
  createUser(user: { name: string; age: number; gender: string; }) {
    return this.http.post(this.BASE_URL, user, {
      headers: {
        "content-type": 'application/json'
      }
    });
  }
  constructor(public http: HttpClient) { }
}

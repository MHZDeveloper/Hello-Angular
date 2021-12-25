import {Component, OnInit} from '@angular/core';
import {User} from "../model/User";
import {UserService} from "../service/UserService";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  date = new Date();

  users :User[]=[]

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.get().subscribe(users => this.users=users);
  }

  greet(user: User) {
    alert("Hello "+user.firstName+" "+user.lastName)
  }
}

import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user:any

  @Output()
  greeting = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  greet() {
    this.greeting.emit("Hello "+this.user.firstName+" "+this.user.lastName)
  }
}

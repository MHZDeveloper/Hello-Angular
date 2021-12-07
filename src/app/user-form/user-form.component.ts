import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../service/UserService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  form:any

  constructor(private formBuilder:FormBuilder, private userService:UserService,private router:Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id:this.formBuilder.control('0',[Validators.required,Validators.pattern('[0-9]+')]),
      firstName : this.formBuilder.control('',[Validators.required]),
      lastName : this.formBuilder.control('',[Validators.required])
    });
  }

  submit(){
    this.userService.post(this.form.value).subscribe(user => this.router.navigate(['/']))
  }

}

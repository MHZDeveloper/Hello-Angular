import {User} from "../model/User";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";

@Injectable()
export class UserService{

  users:Observable<User[]>

  constructor(private http:HttpClient) {
    this.users = new Observable( observer => {
      observer.next( [new User('0','Flen','Weld Falten'),
        new User('2','Flena','Bent Faltena') ])
    })
  }

  //if you can't run the backend uncomment the line below and comment those with http

  get(){
    //return this.users
    return this.http.get<User[]>('http://localhost:8080/api/user');
  }

  post(user:User){
    //return this.users.pipe(tap(usersList => {usersList.push(user)}))
    return this.http.post('http://localhost:8080/api/user',user);
  }
}

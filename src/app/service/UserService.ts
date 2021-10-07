import {User} from "../model/User";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService{

  constructor(private http:HttpClient) {
  }

  users = [new User('0','Flen','Weld Falten'),
    new User('2','Flena','Bent Faltena')]

  get(){
    return this.http.get<User[]>('http://localhost:8080/api/user');
  }

  post(user:User){
    return this.http.post('http://localhost:8080/api/user',user);
  }
}

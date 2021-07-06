import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/user';
import { map } from 'rxjs/operators';

export class User1{
  constructor(public status:string,){}
}
export class JwtResponse{
  constructor(public jwttoken:string,){}
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }
  // authenticUser(user:User)  {
  //   return this.httpClient.post<User>("http://localhost:8088/users/login",user);
  // }
  addUser(user:User)  {
    return this.httpClient.post<User>("http://localhost:8002/users/register",user);
  }
  authenticUser(user:User)  {
    return this.httpClient.post("http://localhost:8002/users/login",user).pipe(
      map(
        userData=>{
          sessionStorage.setItem('email', user.email);
          let tokenStr='Bearer '+user.token;
          sessionStorage.setItem('token',tokenStr);
          return userData;
        }
      )
    );
  }







  logout()
  {
    sessionStorage.removeItem('email');
   // sessionStorage.removeItem('securityStr');
  }

  getLoginStatus()
  {
    if(sessionStorage.getItem('email')!=null)
    {
      return true;
    }
    return false;
  }
}
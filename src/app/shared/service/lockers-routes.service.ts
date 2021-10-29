import { UserModel } from './../models/user-model';
import { LoginUserModel } from './../../auth/models/login';
import { UrlLockerService } from './url-locker.service';
import { RegisterUserModel } from './../../auth/models/register-user-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LockersRoutesService {


  constructor(
    private http: HttpClient,
    private urlLockers: UrlLockerService
    ) { }

  registerUser(newUser:RegisterUserModel){
    return this.http.post(this.urlLockers.registerUser,newUser);
  }

  loginUsers(user:LoginUserModel){
    return this.http.post(this.urlLockers.loginUser,user);
  }

  getUserData(idUser:number){
    return this.http.get(`${this.urlLockers.userContext}/${idUser}`);
  }

  /* Update */
  updateUser(idUser:number,user:UserModel){
    return this.http.put(`${this.urlLockers.userContext}/${idUser}`,user);
  }

}

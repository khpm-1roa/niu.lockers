import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlLockerService {

  authContext:string;
  userContext:string;

  /* Auth */

  registerUser:string;
  loginUser:string;

  /* User */

  constructor(){

    this.authContext = environment.urlApi + '/auth';
    this.userContext = environment.urlApi + '/user';

    this.registerUser = this.authContext + '/registrar';
    this.loginUser = this.authContext + '/ingresar';


  };


}

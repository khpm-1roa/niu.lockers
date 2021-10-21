import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LockersRoutesService {

  enviroment = environment;

  getRol:string = environment.urlApi + '/rol';

  constructor(private http: HttpClient) { }

  getRoles(){
    return this.http.get(this.getRol)
  }

}
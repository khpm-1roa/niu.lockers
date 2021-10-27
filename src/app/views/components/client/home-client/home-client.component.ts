import { Component, OnInit } from '@angular/core';
import { UserModel } from './../../../../shared/models/user-model';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css']
})
export class HomeClientComponent implements OnInit {

  userData: UserModel;
  token:string;
  constructor() { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.token = JSON.parse(localStorage.getItem('accessToken'));
 
  }

}

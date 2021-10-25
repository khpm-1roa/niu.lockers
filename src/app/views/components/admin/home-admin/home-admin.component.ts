import { UserModel } from './../../../../shared/models/user-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  userData: UserModel;
  token:string;
  constructor() { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.token = JSON.parse(localStorage.getItem('accessToken'));
  }

}

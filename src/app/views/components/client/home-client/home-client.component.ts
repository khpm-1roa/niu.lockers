import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user-model';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css']
})
export class HomeClientComponent implements OnInit {

  lectura:boolean = true;

  /* crear un formulario y que el formlario tome los valores de localStorage de userData pathValue */

  /* crear un formulario html con la directivas *ngIf */

  userData: UserModel;
  token:string;

  constructor() { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.token = JSON.parse(localStorage.getItem('accessToken'));
  }

  /* crear una funcion que hacer update  */

}


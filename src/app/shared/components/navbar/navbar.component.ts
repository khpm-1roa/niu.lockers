import { Component, OnInit } from '@angular/core';
import { LockersRoutesService } from '../../service/lockers-routes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    protected api: LockersRoutesService
  ) { }

  ngOnInit(): void {
    this.api.getRoles().subscribe((respuesta:any)=>{
      console.log(respuesta)
    },err=>{
      console.log(err)
    })
  }

}
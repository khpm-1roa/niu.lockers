import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
  
})
export class DeveloperComponent implements OnInit {

  titulo: string ="titulo1";
 
  parrafo: string= "parrafoGenerico";

  titulochan:boolean=false;
  parrafochan:boolean=false;

nuevoTitulo!:string;
nuevoParrafo!:string;

tap:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarParrafo(){
  this.parrafochan=true;
  this.nuevoParrafo=this.parrafo
  }
  cambiarTitulo(){
  this.titulochan=true;
  this.nuevoTitulo=this.titulo

  }
  guardarParrafo(){
    this.parrafochan=false;
    this.parrafo=this.nuevoParrafo
  }
  guardarTitulo(){
    this.titulochan=false;
    this.titulo=this.nuevoTitulo
  }



}

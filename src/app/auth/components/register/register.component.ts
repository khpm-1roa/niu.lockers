import { RegisterUserModel } from './../../models/register-user-model';
import { LockersRoutesService } from './../../../shared/service/lockers-routes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Propiedades } from 'src/app/shared/util/propiedades';

// import { validarQueSeanIguales } from './app.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  propiedades: Propiedades = new Propiedades();
  // generar un patter de la contraseña caracteres especiales

  private usuarioPattern: any = /^[a-zA-Z0-9\_\-]{4,16}$/; // Letras, numeros, guion y guion_bajo
  private nombrePattern: any = /^[a-zA-ZÀ-ÿ\s]{1,40}$/ // Letras y espacios, pueden llevar acentos.

  private celuPattern: any = /^\d{7,10};/ // 7 a 14 numeros.

  private telefonoPattern: any = /^\d{10,10};/;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  registroForm!: FormGroup;
  errorregistro: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private lockers: LockersRoutesService
  ) { }

  ngOnInit(): void {

    this.registroForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern(/^[a-zA-z]+$/)]],
      names: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25), Validators.pattern(/^[a-zA-z]+$/)]],
      empresa: ['', [Validators.required, Validators.pattern(/^[a-zA-z]+$/)]],
      celular: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]+$/)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@^_`{|}~]).{6,}$/)]]

    })
  }

  public register() {
    if (this.registroForm.valid) {

      const datosForm = this.registroForm.value;

      const newUser: RegisterUserModel = {
        name:datosForm.name,
        lastName: datosForm.names,
        companyName: datosForm.empresa,
        phone: datosForm.celular,
        name_user: datosForm.name + ' ' + datosForm.names,
        email_user: datosForm.email,
        email: datosForm.email,
        password: datosForm.password
      };


      this.lockers.registerUser(newUser)
        .subscribe((res:any)=>{
          console.log('Respuesta del servicio',res)
          this.router.navigate(['/login']);
        },err=>{
          console.log('Hubo un eror', err)
        })
    }
  }

}

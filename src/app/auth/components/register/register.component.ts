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

  propiedades:Propiedades =new Propiedades();
// generar un patter de la contraseña caracteres especiales

  private usuarioPattern:any =/^[a-zA-Z0-9\_\-]{4,16}$/; // Letras, numeros, guion y guion_bajo
	private nombrePattern:any= /^[a-zA-ZÀ-ÿ\s]{1,40}$/ // Letras y espacios, pueden llevar acentos.

	 private celuPattern:any = /^\d{7,10};/ // 7 a 14 numeros.

  private telefonoPattern:any =/^\d{10,10};/;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  
  registroForm!: FormGroup;
  errorregistro: boolean = false;
  form: any;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }
  ngOnInit(): void {
    
    this.registroForm = this.fb.group({
      name:['', [Validators.required, Validators.minLength(6),Validators.maxLength(10),Validators.pattern(/^[a-zA-z]+$/)]],
      names:['', [Validators.required, Validators.minLength(6),Validators.maxLength(10),Validators.pattern(/^[a-zA-z]+$/)]],
     
      empresa:['', [Validators.required,,Validators.pattern(/^[a-zA-z]+$/)]],

      celular:['', [Validators.required, Validators.minLength(10),Validators.maxLength(11),Validators.pattern(/^[0-9]+$/)]],

      email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
      password:['', [Validators.required, Validators.minLength(4),Validators.maxLength(9),Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@^_`{|}~]).{6,}$/)]] 
  
     

      
    })
  }

  public login(){
    if(this.registroForm.valid){
      console.log(this.registroForm.value);
      this.router.navigate(['/'])
    }
  }

  // initForm() {
  //   this.form = this.fb.group({
  //     'password':  ['', Validators.required],
  //     'confirmarPassword': ['', Validators.required]
  //   }, {
  //     validators: validarQueSeanIguales
  //   });
  // }

  // checarSiSonIguales(): boolean {
  //   return this.form.hasError('noSonIguales') &&
  //     this.form.get('password').dirty &&
  //     this.form.get('confirmarPassword').dirty;
  // }

}
  
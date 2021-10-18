import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Propiedades } from 'src/app/shared/util/propiedades';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  propiedades:Propiedades =new Propiedades();

  private telefonoPattern:any ="^(0-9,$)*$" ;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  registroForm!: FormGroup;
  errorregistro: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.registroForm = this.fb.group({
      name:['', [Validators.required, Validators.minLength(6),Validators.maxLength(10)]],
      names:['', [Validators.required, Validators.minLength(6),Validators.maxLength(10)]],

      celular:['', [Validators.required, Validators.minLength(7),Validators.maxLength(10),Validators.pattern(this.telefonoPattern)]],

      email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
      password:['', [Validators.required, Validators.minLength(4),Validators.maxLength(9)]] 
     
   
    })
  }
  public login(){
    if(this.registroForm.valid){
      console.log(this.registroForm.value);
      this.router.navigate(['/'])
    }
  }

}
  
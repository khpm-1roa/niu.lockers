import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  registroForm!: FormGroup;
  errorregistro: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.registroForm = this.fb.group({
      name:['', [Validators.required, Validators.minLength(6),Validators.maxLength(9)]] ,
      email:['',[Validators.required, Validators.email,Validators.pattern(this.emailPattern)]],
      password:['', [Validators.required, Validators.minLength(6),Validators.maxLength(9)]] 
     
   
    })
  }
  public login(){
    if(this.registroForm.valid){
      console.log(this.registroForm.value);
      this.router.navigate(['/'])
    }
  }

}
  
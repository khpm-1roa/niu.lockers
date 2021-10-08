import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  errorLogin: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]] 
    })
  }

  public login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.router.navigate(['/'])
    }
  }

}

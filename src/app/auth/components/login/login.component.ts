import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
   private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  loginForm!: FormGroup;
  errorLogin: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.email,Validators.pattern(this.emailPattern)]],
      password:['', [Validators.required, Validators.minLength(6),Validators.maxLength(9)]] 
     
   
    })
  }
  public login(){
    if(this.loginForm.valid){
     const datos =this.loginForm.value;
     if(datos.email === "admin@admin.com")  {
       this.router.navigate(["admin"])
     }else{
       this.router.navigate(["client"])
     }
    }
  }

}




// export class LoginComponent {

//   public LoginForm: FormGroup;

//   tslint:disable-next-line: max-line-length
//   private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//   constructor() {
//     this.LoginForm = this.createForm();
//   }

//   get passwork() { return this.LoginForm.get('passwork'); }
//   get email() { return this.LoginForm.get('email'); }
 

//   createForm() {
//     return new FormGroup({
//       email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
//       passwork: new FormControl('', [Validators.required, Validators.minLength(5)]),
      
//     });
//   }

//   onResetForm(): void {
//     this.LoginForm.reset();
//   }


// }

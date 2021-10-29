import { LoginUserModel } from './../../models/login';
import { LockersRoutesService } from './../../../shared/service/lockers-routes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Propiedades } from 'src/app/shared/util/propiedades';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  propiedades: Propiedades = new Propiedades();

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  loginForm!: FormGroup;
  errorLogin: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private locker: LockersRoutesService
  ) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]]


    })
  }
  public login() {
    if (this.loginForm.valid) {

      const datos = this.loginForm.value;

      const userLogin: LoginUserModel = {
        email_user: datos.email,
        password: datos.password
      }

      this.locker.loginUsers(userLogin)
        .subscribe((res:any)=>{
          console.log('Respuesta', res);
          const token = res.token;
          localStorage.setItem('accessToken',JSON.stringify(token))
          /* Desencriptar el token
          const email. nombre,
          */

          localStorage.setItem('userData',JSON.stringify(res.user));
              if(res.user.rol_id == 1){
                this.router.navigate(["/client"])
              }
              if(res.user.rol_id == 2){
                this.router.navigate(["admin"])
              }
        },err=>{
          console.log('Error',err)
        })
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

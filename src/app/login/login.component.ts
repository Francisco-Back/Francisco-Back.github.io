
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginUsuario } from '../models/login-usuario';
import { TokenService } from '../services/token.service';
import{ ToastrService } from 'ngx-toastr';
import { catchError, of } from 'rxjs';
import { Location, LocationStrategy } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  email!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;
  ligaID!: number;
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private locationStrategy: LocationStrategy,
    private route: ActivatedRoute,

  ) {


   }

  ngOnInit() {
    this.ligaID = this.route.snapshot.params['id'];
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.email, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.email);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.toastr.success('Bienvenido ' + data.email, 'OK', {
          timeOut: 3000
        });
        if(this.ligaID!=null){
          window.location.replace(this.locationStrategy.getBaseHref()+'confirmacionliga/'+this.ligaID);
        }else{
          window.location.replace(this.locationStrategy.getBaseHref()+'principal');

        }
      }, error =>{
        this.isLogged = false;
        this.toastr.error('Login Incorrecto', 'Fail', {
          timeOut: 6000,  positionClass: 'toast-top-center',
        });
      }
      
    );
  }

  

}


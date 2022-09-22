import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';
import { JwtDTO } from '../models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'https://umgfifa2022b.herokuapp.com:443';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: User): Observable<any> {
    return this.httpClient.post<any>(this.authURL + '/api/auth/nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + '/api/auth/login', loginUsuario);
  }
}

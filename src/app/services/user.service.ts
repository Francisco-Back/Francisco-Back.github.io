import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user.model';
import { UserIDS } from '../models/user-id';
import { Liga } from '../models/liga.model';
import { LigaUser } from '../models/ligaUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = "https://umgfifa2022b.herokuapp.com:443";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*'
    })
  }

  constructor(private httpClient: HttpClient) { }

    //Service Usuarios
  getAll(): Observable<User> {
    return this.httpClient.get<User>(this.apiURL + '/api/User')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getuserID(correo: string | null): Observable<UserIDS> {
    console.log(correo);
    console.log(this.httpClient.get<UserIDS>(this.apiURL + '/api/User/Dsearch/' + correo, this.httpOptions));
    return this.httpClient.get<UserIDS>(this.apiURL + '/api/User/Dsearch/' + correo, this.httpOptions);
  }



  create(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiURL + '/api/auth/nuevo', JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  GetUserByEmail(id: String | null): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL + '/api/User/search/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  //--------------------------------------------------------------------------------------------
  //Service para Ligas ADMIN

  createLiga(liga: Liga, id: number): Observable<Liga> {
    return this.httpClient.post<Liga>(this.apiURL + '/api/Ligas/Create/' + id, JSON.stringify(liga), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  ligasFindByUserId(id: number | null): Observable<Liga[]> {

    return this.httpClient.get<Liga[]>(this.apiURL + '/api/Ligas/UserT/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  ligasFindById(id: number): Observable<Liga>{
    return this.httpClient.get<Liga>(this.apiURL + '/api/Ligas/LigasUser/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  Verificador(id: number): Observable<number>{
    return this.httpClient.get<number>(this.apiURL + '/api/Ligas/Verificador/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  //service para Ligas-USer
  crearLigaUser(LigaId: number, UserId: number): Observable<LigaUser> {
    return this.httpClient.post<LigaUser>(this.apiURL + '/api/UserLigas/UnionLiga/' + UserId + '/'+LigaId, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  UserLigasFindByLigaID(id: number): Observable<LigaUser[]> {
    return this.httpClient.get<LigaUser[]>(this.apiURL + '/api/UserLigas/searchLiga/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  UserLigasFindByUser(id: number | null): Observable<LigaUser[]> {
    return this.httpClient.get<LigaUser[]>(this.apiURL + '/api/UserLigas/searchuser/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  UserLigasEstado(id: number): Observable<LigaUser> {
    return this.httpClient.get<LigaUser>(this.apiURL + '/api/UserLigas/Estado/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  ChangeEstado(idUnion: number, estado:number): Observable<LigaUser> {
    return this.httpClient.patch<LigaUser>(this.apiURL + '/api/UserLigas/update/Estado/' + idUnion + '/'+estado, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

/*  find(id: number): Observable<Client> {
    return this.httpClient.get<Client>(this.apiURL + '/client/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id: number, client: Client): Observable<Client> {
    return this.httpClient.put<Client>(this.apiURL + '/client/' + id, JSON.stringify(client), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id: number){
    return this.httpClient.delete<Client>(this.apiURL + '/client/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

   */
  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Liga } from '../models/liga.model';
import { LigaUser } from '../models/Liga-User.model';

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
    
  create(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiURL + '/api/auth/nuevo', JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  //-----------------------------------
  /*Service Imagen
    subirImagen(imagen:File): Observable<String>{
      const formData = new FormData();
      formData.append('multipartFile', imagen);
      return this.httpClient.post<String>(this.apiURL + '/api/User/upload',formData, this.httpOptions);
    }*/
  //--------------------------------------------------------------------------------------------
  //Service para Ligas

  createLiga(liga: Liga, id: number): Observable<Liga> {
    return this.httpClient.post<Liga>(this.apiURL + '/api/Ligas/' + id, JSON.stringify(liga), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  ligasFindByUserId(id: number): Observable<Liga[]> {
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

   //Service para User-Ligas Controller

   crearLigaUser(LigaId: number, UserId: number): Observable<LigaUser> {
    return this.httpClient.post<LigaUser>(this.apiURL + '/api/UserLigas/UnionLiga/' + UserId + '/'+LigaId, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  UserLigasFindByLigaID(id: number): Observable<LigaUser> {
    return this.httpClient.get<LigaUser>(this.apiURL + '/api/UserLigas/searchLiga/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  UserLigasFindByUser(id: number): Observable<LigaUser> {
    return this.httpClient.get<LigaUser>(this.apiURL + '/api/UserLigas/searchuser/' + id)
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

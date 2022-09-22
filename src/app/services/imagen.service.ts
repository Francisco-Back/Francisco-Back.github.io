import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imagen } from '../models/imagen.model';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  imagenURL ='https://umgfifa2022b.herokuapp.com:443/api';
  constructor(
    private httpClient: HttpClient
  ) { }

    //Service Imagen
    subirImagen(imagen:File): Observable<Imagen>{
      const formData = new FormData();
      formData.append('multipartFile', imagen);
      return this.httpClient.post<Imagen>(this.imagenURL + '/User/upload',formData);
    }
}

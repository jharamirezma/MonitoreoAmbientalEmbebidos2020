import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export enum Datos {
  temperatura = 'temperatura',
  humedad = 'humedad',
  ruido = 'ruido',
  contaminacion = 'contaminacion',
  monoxido = 'monoxido',
  lluvia = 'lluvia',
  presion = 'presion',
  uv = 'uv',
  luminosidad = 'luminosidad '
}


@Injectable({
  providedIn: 'root'
})


export class DatosService {
  url = 'http:/aulal.org:1880/';
  apiKey = '';


  constructor(private http: HttpClient) {
  }

  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }

}
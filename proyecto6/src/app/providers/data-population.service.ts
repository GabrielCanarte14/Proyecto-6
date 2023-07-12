import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class dataPopulationService {
  private URL: string =
    'https://tv-series-dataset-default-rtdb.firebaseio.com/collection.json';
  //Inyección de dependencia del HttpClient
  constructor(private http: HttpClient) {}

  //Método con la petición HTTP
  getResponse() {
    return this.http.get(this.URL);
  }
} 

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private apiUrl = 'http://localhost:8082/api/v1/';
  constructor(private http:HttpClient) { }
  listarProductos(): Observable<Producto[]> {     
    return this.http.get<Producto[]>(this.apiUrl +'/listarProductos');
  }
}

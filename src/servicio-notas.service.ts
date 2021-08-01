import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nota } from './app/nota';

@Injectable({
  providedIn: 'root'
})
export class ServicioNotasService {


  url="http://localhost/Notas/notas/backend/"

  constructor(private http:HttpClient) { }


  consultarNotas():Observable<any> {
    return this.http.get(`${this.url}load.php`);
  }

  guardarDatos(lista:Nota):Observable<any>{
    return this.http.post(`${this.url}save.php`, JSON.stringify(lista))
  }

  eliminar(index:any):Observable<any>{
    return this.http.post(`${this.url}delete.php`, JSON.stringify(index))
  }

  getNota(id:string) {
    return this.http.get(`${this.url}getNota.php?id=${id}`)
  }
}

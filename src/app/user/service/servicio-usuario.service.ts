import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInterface} from "../interface/user.interface";

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuario {

  constructor(private http: HttpClient) { }

  urlBase: string = 'http://localhost:3000/usuario' ;

  getUsuarios(): Observable<UserInterface[]>{
    return this.http.get<UserInterface[]>(this.urlBase);
  }

}

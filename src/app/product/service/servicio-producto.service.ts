import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductInterface} from "../interface/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ServicioProducto {

  constructor(private http: HttpClient) { }

  urlBase: string = 'http://localhost:3000/productos' ;

  getProductos(): Observable<ProductInterface[]>{
   return this.http.get<ProductInterface[]>(this.urlBase)
  }

  postProductos(cuchillo: ProductInterface): Observable<ProductInterface> {
    return this.http.post<ProductInterface>(this.urlBase, cuchillo);
  }

}

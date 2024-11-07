import {Component, inject, OnInit} from '@angular/core';
import {ProductInterface} from "../../interface/product.interface";
import {ServicioProducto} from "../../service/servicio-producto.service";

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit {

  listaProductos: ProductInterface[] = [];
  productosService = inject(ServicioProducto);

  traerProductosDeJson() {
    this.productosService.getProductos().subscribe({
      next: (productos: ProductInterface[]) => {
        this.listaProductos = productos;
      },error: (e)=>{
        console.error(e);
      }
    })
  }

  ngOnInit(): void {
    this.traerProductosDeJson();
  }

}

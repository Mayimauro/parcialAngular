import {Component, inject} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ServicioProducto} from "../../service/servicio-producto.service";
import {ProductInterface} from "../../interface/product.interface";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  fb = inject(FormBuilder);
  productoServicio = inject(ServicioProducto);

  formulario = this.fb.nonNullable.group({
    nombre: ['', Validators.required],
    marca: ['', Validators.required],
    cantidad: [0, Validators.required]
  })

  agregarProducto(){
    if(this.formulario.invalid){return}
    const pNuevo = this.formulario.getRawValue();

    this.agregarProductoAbdd(pNuevo);

    this.formulario.reset();

  }

  agregarProductoAbdd(producto: ProductInterface){
    this.productoServicio.postProductos(producto).subscribe({
      next: ()=>{
        alert("producto Agregado presiona f5");
      },error: (e)=>{
        console.error(e);
      }
    })
  }


}

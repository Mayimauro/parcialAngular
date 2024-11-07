import { Component } from '@angular/core';
import {AddProductComponent} from "../../components/add-product/add-product.component";
import {ListProductComponent} from "../../components/list-product/list-product.component";

@Component({
  selector: 'app-home-product',
  standalone: true,
  imports: [
    AddProductComponent,
    ListProductComponent
  ],
  templateUrl: './home-product.component.html',
  styleUrl: './home-product.component.css'
})
export class HomeProductComponent {

}

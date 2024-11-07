import { Component } from '@angular/core';
import {ListProductComponent} from "../../product/components/list-product/list-product.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    ListProductComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}

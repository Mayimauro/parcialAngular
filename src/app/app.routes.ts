import { Routes } from '@angular/router';
import {HomeProductComponent} from "./product/pages/home-product/home-product.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AuthPageComponent} from "./user/pages/auth-page/auth-page.component";

export const routes: Routes = [
  {
    path: '',component: HomePageComponent
  },
  {
    path: 'logIn', component: AuthPageComponent
  },
  {
    path: 'productos', component: HomeProductComponent
  }
];

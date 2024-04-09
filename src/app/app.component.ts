import {  Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


//Modulos 
import { ReactiveFormsModule } from '@angular/forms';


//Componentes
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ListProductsComponent } from "./components/list-products/list-products.component";
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, 
              NavbarComponent,
              ListProductsComponent,
              ReactiveFormsModule, 
              AddEditProductComponent,
              CommonModule
              ],
})
export class AppComponent {
  title = 'frontend';
}

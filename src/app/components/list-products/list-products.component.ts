import { Component } from '@angular/core';
import { Product } from '../../services/product'; 
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-products',
  standalone: true, // Esta propiedad exporta el componente para su uso en plantillas
  imports: [CommonModule,RouterLink,RouterModule],
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'], // Aquí debería ser styleUrls, no styleUrl
})
export class ListProductsComponent {
  listProducts: Product[]= [
    {
      id: 1,
      name: 'Cuadernos',
      description: 'Utiles escolares',
      price: 800,
      stock: 200,
    },
    {
      id: 2,
      name: 'Lápices',
      description: 'Utiles escolares',
      price: 300,
      stock: 800,
    },
    
  ];
  item: any;
}

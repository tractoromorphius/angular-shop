import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'shop-products-list',
  standalone: true,
  imports: [
    ProductCardComponent,
    NgForOf,
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

}

import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'shop-product-card',
  standalone: true,
  imports: [
    NgForOf,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

}

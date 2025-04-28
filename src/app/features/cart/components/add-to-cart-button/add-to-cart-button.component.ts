import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../shared/types/product.types';

@Component({
  selector: 'app-add-to-cart-button',
  standalone: true,
  imports: [],
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.scss']
})
export class AddToCartButtonComponent {
  @Input() product!: Product;
  @Output() added = new EventEmitter<Product>();

  addToCart() {
    // You can add cart logic here later
    console.log('Adding to cart:', this.product);
    this.added.emit(this.product);
  }
}
